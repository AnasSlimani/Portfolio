
import { Technology, Project, ExperienceItem } from '../types';
import medical from '../assets/images/prj/medical.png';
import k8s from '../assets/images/prj/k8s.png';
import kubernets from '../assets/images/icons/kubernets.svg';
import mysql from '../assets/images/icons/mysql-logo-pure.svg';
import SportifClub from '../assets/images/prj/SportifClub.png';
import CarRental from '../assets/images/prj/CarRental.png';
import MovieFinder from '../assets/images/prj/MovieFinder.png';
import TNS from '../assets/images/prj/TNS.png';

// Data
export const technologies: Technology[] = [
  // Langages de programmation
  { 
    name: 'Java', 
    description: 'General-purpose language for building robust back-end systems and enterprise applications.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' 
  },
  { 
    name: 'JavaScript', 
    description: 'Dynamic language for building interactive web applications and modern UIs.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' 
  },
  { 
    name: 'TypeScript', 
    description: 'Typed superset of JavaScript for building scalable and maintainable applications.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' 
  },
  { 
    name: 'Python', 
    description: 'Versatile language used for scripting, automation, web back-ends, and data processing.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' 
  },
  { 
    name: 'PHP', 
    description: 'Server-side scripting language for dynamic web applications.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/php-1.svg' 
  },
  

  // Frameworks Backend
  { 
    name: 'Spring Boot', 
    description: 'Java-based framework for creating microservices and enterprise web applications.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg' 
  },
  

  // Frameworks Frontend
  { 
    name: 'React', 
    description: 'JavaScript library for building modern, component-based user interfaces.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' 
  },
  { 
    name: 'Next.js', 
    description: 'React framework for building full-stack web applications with server-side rendering.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' 
  },
  { 
    name: 'Remix', 
    description: 'Full-stack React framework focused on web standards and modern UX.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/remix.svg' 
  },
  { 
    name: 'Angular', 
    description: 'TypeScript-based framework for building robust single-page applications.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' 
  },

  // CSS Frameworks
  { 
    name: 'Tailwind CSS', 
    description: 'Utility-first CSS framework for building custom, responsive designs rapidly.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' 
  },
  { 
    name: 'Bootstrap', 
    description: 'Popular CSS framework for building responsive, mobile-first websites.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' 
  },

  // Bases de données
  { 
    name: 'PostgreSQL', 
    description: 'Powerful open-source object-relational database system with advanced features.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' 
  },
  { 
    name: 'MySQL', 
    description: 'Open-source relational database management system for web applications.', 
    icon: mysql 
  },
  { 
    name: 'MongoDB', 
    description: 'NoSQL document database for storing flexible, JSON-like data at scale.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' 
  },
  { 
    name: 'Oracle Database', 
    description: 'Enterprise-grade relational database for mission-critical applications.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' 
  },

  // DevOps & Cloud
  { 
    name: 'Docker', 
    description: 'Platform for developing, shipping, and running applications in isolated containers.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg' 
  },
  { 
    name: 'Kubernetes', 
    description: 'Container orchestration platform for automating deployment, scaling, and management.', 
    icon: kubernets 
  },
  { 
    name: 'Jenkins', 
    description: 'Open-source automation server for building CI/CD pipelines and workflows.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg' 
  },
  { 
    name: 'Git', 
    description: 'Distributed version control system for tracking code changes and collaboration.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' 
  },
  { 
    name: 'GitHub', 
    description: 'Web-based platform for version control, collaboration, and code hosting.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' 
  },
  { 
    name: 'AWS', 
    description: 'Amazon Web Services - comprehensive cloud platform for computing and storage.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' 
  },
  { 
    name: 'Azure', 
    description: 'Microsoft cloud platform for building, deploying, and managing applications.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg' 
  },
  { 
    name: 'Terraform', 
    description: 'Infrastructure as Code tool for provisioning and managing cloud resources.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' 
  },
  { 
    name: 'Ansible', 
    description: 'Automation tool for configuration management, application deployment, and orchestration.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/ansible.svg' 
  },

  // Sécurité & Auth
  { 
    name: 'Keycloak', 
    description: 'Open-source identity and access management solution with SSO capabilities.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/keycloak.svg' 
  },

  // Qualité & Testing
  { 
    name: 'SonarQube', 
    description: 'Platform for continuous inspection of code quality and security vulnerabilities.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/sonarqube.svg' 
  },

  // Build Tools & ORM
  { 
    name: 'MyBatis', 
    description: 'Java persistence framework for custom SQL, stored procedures, and advanced mappings.', 
    icon: 'https://cdn.worldvectorlogo.com/logos/mybatis.svg' 
  }
];

export const projects: Project[] = [
  {
    title: 'Medical Clinic Management System',
    description: 'Design of a modern medical platform that integrates microservices, security, CI/CD, and automated testing to optimize the management of patients, appointments, and prescriptions within an agile, high-performance ecosystem.',
    image: medical,
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Docker', 'Jenkins', 'Tailwind CSS'],
    githubUrl: 'https://github.com/AnasSlimani/Medical-Clinic-Management-System',
  },
  {
    title: 'Digital Sports Club Management Platform',
    description: 'A full-stack web application built with Spring Boot, Next.js and MongoDB to centralize club management. Provides JWT-secured REST APIs, Google OAuth2 login, role-based dashboards, tournament and ranking management, an integrated shop, real-time team chat with WebSocket, and containerized deployment with Docker.',
    image: SportifClub,
    techStack: ['Java','Spring Boot','Spring Security','JWT','MongoDB','Next.js','React','TypeScript','Tailwind CSS','Socket.io','Docker'],
    githubUrl: 'https://github.com/AnasSlimani/Sports-Club-Management',
  },
  {
    title: 'TNS Management System - CNSS',
    description: 'Internal web application for consulting self-employed workers (TNS) files at Morocco\'s National Social Security Fund. Features authentication via Keycloak SSO, comprehensive dashboard for registration requests, AMO contracts, account management, and eligibility verification. Built with modern architecture and CI/CD pipeline.',
    image: TNS,
    techStack: ['Spring Boot', 'Remix', 'React', 'Oracle Database', 'Keycloak', 'Docker', 'Jenkins', 'SonarQube', 'Tailwind CSS'],
    githubUrl: 'https://github.com/AnasSlimani/TNS-Management-Platform-CNSS',
  },
  {
    title: 'DevOps Project',
    description: 'Automated CI/CD pipeline using Jenkins and Microsoft Azure. Builds and tests a Dockerized web application, pushes images to Azure Container Registry, and deploys to Azure Web App with secure credentials, deployment traceability, and reduced manual operations.',
    image: k8s,
    techStack: ['Jenkins','Docker','Azure Container Registry (ACR)','Azure Web App for Containers','Git / GitHub','PowerShell'],
    githubUrl: 'https://github.com/AnasSlimani/Jenkins-Azure-CI-CD-Pipeline',
  },
  {
    title: 'Car Rental Management Platform',
    description: 'Car Rental Management Platform built with Spring Boot, Spring Security and PostgreSQL on the backend and React/Tailwind CSS on the frontend. Supports multi-role access (Admin, User, Technician), vehicle fleet management, bookings, and maintenance tracking.',
    image: CarRental,
    techStack: ['Java','Spring Boot','Spring Security','PostgreSQL','JWT','React','Tailwind CSS','Docker'],
    githubUrl: 'https://github.com/AnasSlimani/Car-Rental-Management',
  },
  {
    title: 'Movie Finder Mobile App',
    description: 'A modern React Native mobile application for discovering movies and TV shows. Features authentication, advanced search, trending content, and favorites management. Built with Expo and powered by TMDB API with Appwrite backend.',
    image: MovieFinder,
    techStack: ['React Native', 'Expo', 'TypeScript', 'Appwrite', 'TMDB API', 'Tailwind CSS', 'Git'],
    githubUrl: 'https://github.com/votre-username/movie-finder-app',
}
];

export const experience: ExperienceItem[] = [
    {
    title: 'Full Stack Development Intern',
    company: 'CNSS',
    dateRange: 'Jul 2025 - Nov 2025',
    description: 'Internal web application for consulting self-employed workers (TNS) files at Morocco\'s National Social Security Fund. Features authentication via Keycloak SSO, comprehensive dashboard for registration requests, AMO contracts, account management...'
  },
  {
    title: 'Media & Production Cell Leader',
    company: 'Open Source Event of ENSAKH',
    dateRange: '2024 - 2025',
    description: 'Led media coverage for the "Artificial Intelligence and DevOps" event. Supervised content production for social media, coordinated events, and managed a creative team to meet deadlines.'
  }
];