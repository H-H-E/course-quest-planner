import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getCourseRecommendations } from "@/utils/openai";
import PersonalizedCoursePlan from "@/components/PersonalizedCoursePlan";

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: '',
    grade: '',
    subjects: [],
    otherSubjects: '',
    learningStyle: '',
    otherLearningStyle: '',
    availability: [],
    otherAvailability: '',
    academicGoals: '',
    courseLoad: '',
    otherCourseLoad: '',
    indigenousRequirement: '',
    otherIndigenousRequirement: '',
    postSecondaryPlans: '',
    supportNeeds: '',
    otherSupportNeeds: '',
    extracurricularActivities: ''
  });
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (id, value) => {
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleMultiSelectChange = (id, value) => {
    setFormData(prevData => ({ ...prevData, [id]: Array.isArray(prevData[id]) ? [...prevData[id], value] : [value] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const recommendationsData = await getCourseRecommendations(formData);
      setRecommendations(recommendationsData);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error getting recommendations:', error);
      setRecommendations(null);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary py-4 px-6">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="text-primary-foreground font-bold text-xl">PZ Course Planner</div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-primary-foreground hover:text-primary-foreground/80">
              Home
            </Link>
            <Link to="/about" className="text-primary-foreground hover:text-primary-foreground/80">
              About
            </Link>
            <Link to="/contact" className="text-primary-foreground hover:text-primary-foreground/80">
              Contact
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Carousel className="mx-auto max-w-3xl">
          <CarouselContent>
            <CarouselItem>
              <Card className="p-8">
                <form className="grid gap-6">
                  <div>
                    <CardHeader>
                      <CardTitle>Basic Info</CardTitle>
                    </CardHeader>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} />
                      </div>
                      <div>
                        <Label htmlFor="grade">Current Grade</Label>
                        <Select id="grade" onValueChange={(value) => handleSelectChange('grade', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9">Grade 9</SelectItem>
                            <SelectItem value="10">Grade 10</SelectItem>
                            <SelectItem value="11">Grade 11</SelectItem>
                            <SelectItem value="12">Grade 12</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </form>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8">
                <form className="grid gap-6">
                  <div>
                    <CardHeader>
                      <CardTitle>Academic Interests</CardTitle>
                    </CardHeader>
                    <div>
                      <Label htmlFor="subjects">Subjects of Interest</Label>
                      <Select id="subjects" onValueChange={(value) => handleMultiSelectChange('subjects', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subjects" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input id="otherSubjects" placeholder="Other subjects (if applicable)" className="mt-2" value={formData.otherSubjects} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle>Learning Style</CardTitle>
                    </CardHeader>
                    <div>
                      <Label htmlFor="learningStyle">Learning Style Preference</Label>
                      <Select id="learningStyle" onValueChange={(value) => handleSelectChange('learningStyle', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select learning style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hands-on">Hands-on</SelectItem>
                          <SelectItem value="theoretical">Theoretical</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        id="otherLearningStyle"
                        placeholder="Other learning style (if applicable)"
                        className="mt-2"
                        value={formData.otherLearningStyle}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </form>
              </Card>
            </CarouselItem>
            {/* ... (other CarouselItems remain the same, just update the inputs to use formData and handleInputChange/handleSelectChange) ... */}
            <CarouselItem>
              <Card className="p-8">
                <form className="grid gap-6" onSubmit={handleSubmit}>
                  <div>
                    <CardHeader>
                      <CardTitle>Extracurricular Activities</CardTitle>
                    </CardHeader>
                    <div>
                      <Label htmlFor="extracurricularActivities">Involvement in Extracurricular Activities</Label>
                      <Textarea 
                        id="extracurricularActivities" 
                        placeholder="Describe your extracurricular activities" 
                        value={formData.extracurricularActivities}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? 'Generating Recommendations...' : 'Get Course Recommendations'}
                    </Button>
                  </div>
                </form>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:text-primary-foreground">Previous Step</CarouselPrevious>
          <CarouselNext className="text-primary hover:text-primary-foreground">Next Step</CarouselNext>
        </Carousel>
      </main>
      <footer className="bg-muted py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-muted-foreground">&copy; 2024 PZ Course Planner</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-muted-foreground hover:text-muted-foreground/80">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-muted-foreground/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl">
          {recommendations && <PersonalizedCoursePlan user={recommendations} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
