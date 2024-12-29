import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";
import CourseForm from "@/components/CourseForm";
import PersonalizedCoursePlan from "@/components/PersonalizedCoursePlan";
import { getCourseRecommendations } from "@/utils/openai";

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: '',
    grade: '',
    subjects: [],
    learningStyle: '',
    academicGoals: '',
    courseLoad: ''
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
      toast.success("Course recommendations generated successfully!");
    } catch (error) {
      console.error('Error getting recommendations:', error);
      toast.error("Failed to generate recommendations. Please try again.");
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

      <main className="flex-1 container mx-auto py-8 px-4">
        <CourseForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          handleMultiSelectChange={handleMultiSelectChange}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
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