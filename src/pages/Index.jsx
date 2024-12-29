import React from 'react';
import { schoolData } from '../data/schoolData';
import SchoolHeader from '@/components/SchoolHeader';
import GraduationRequirements from '@/components/GraduationRequirements';
import Departments from '@/components/Departments';
import SpecialPrograms from '@/components/SpecialPrograms';

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <SchoolHeader schoolInfo={schoolData.schoolInfo} />
        <GraduationRequirements requirements={schoolData.graduationRequirements} />
        <Departments departments={schoolData.departments} />
        <SpecialPrograms programs={schoolData.specialPrograms} />
      </div>
    </div>
  );
}