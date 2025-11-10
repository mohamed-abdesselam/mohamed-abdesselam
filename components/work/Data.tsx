export interface ProjectSection {
    title: string;
    content: string | string[];
    type: 'text' | 'list';
}

export interface ProjectDetail {
    id: number;
    image: string;
    title: string;
    link: string;
    category: string;
    description: string;
    sections?: ProjectSection[];
    additionalImages?: string[];
    video?: string;
    videos?: string[];
    downloadLink?: string;
    technologies?: string[];
}

export const projectsData: ProjectDetail[] = [
    {
        id: 1,
        image: "/projects/iphone17-blender/iphone-img-1.png",
        title: "iPhone 17 Blender 3D Model",
        link: "iphone17-blender",
        category: "design",
        description: "A highly detailed 3D model of the iPhone 17 created in Blender. This project showcases advanced 3D modeling techniques, realistic material shaders, and professional lighting setup. The model includes accurate proportions, detailed textures, and is ready for rendering and animation.",
        technologies: ["Blender", "Cycles Render", "Substance Painter"],
        sections: [
            {
                title: "Project Highlights",
                type: "list",
                content: [
                    "High-poly 3D model with accurate iPhone 17 proportions",
                    "Realistic material shaders and textures",
                    "Professional lighting setup for product visualization",
                    "Multiple camera angles and render passes",
                    "Animation-ready with proper topology",
                    "Optimized for both still renders and animations"
                ]
            },
            {
                title: "About the Model",
                type: "text",
                content: "This iPhone 17 3D model was meticulously crafted in Blender, focusing on accuracy and detail. The model features realistic materials including glass, metal, and screen elements. The project includes multiple render shots showcasing different angles and lighting conditions, demonstrating the versatility of the model for various use cases."
            },
            {
                title: "Technical Details",
                type: "list",
                content: [
                    "Blender 3.6+ compatible",
                    "Cycles rendering engine optimized",
                    "Clean topology for animation",
                    "PBR materials with realistic reflections",
                    "High-resolution textures included",
                    "Multiple camera setups for different shots"
                ]
            }
        ],
        additionalImages: [
            "/projects/iphone17-blender/iphone-img-1.png",
            "/projects/iphone17-blender/iphone-img-2.png"
        ],
        videos: [
            "/projects/iphone17-blender/shot1.mkv",
            "/projects/iphone17-blender/shot2.mkv"
        ],
        downloadLink: "/projects/iphone17-blender/iphone.blend"
    },
    {
        id: 2,
        image: "/assets/work2.jpg",
        title: "Mobile App",
        link: "mobile-app",
        category: "app",
        description: "Mobile application developed with React Native, offering a native experience for both iOS and Android. The app includes geolocation features, push notifications, and real-time synchronization with the backend.",
        technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Expo"],
        sections: [
            {
                title: "Features",
                type: "list",
                content: [
                    "Real-time geolocation",
                    "Customized push notifications",
                    "Offline synchronization with automatic sync",
                    "Native interface for iOS and Android",
                    "Integration with external APIs",
                    "Dark/light mode"
                ]
            },
            {
                title: "Development",
                type: "text",
                content: "Application developed with React Native and Expo, ensuring full compatibility with both mobile platforms. The architecture was designed for scalability and code maintainability."
            },
            {
                title: "Tech Stack",
                type: "list",
                content: [
                    "React Native 0.72",
                    "TypeScript",
                    "Firebase (Auth, Firestore, Cloud Messaging)",
                    "Redux Toolkit for state management",
                    "React Navigation for navigation",
                    "Expo SDK 49"
                ]
            }
        ],
        additionalImages: [
            "/assets/work2.jpg",
            "/assets/work3.jpg"
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        downloadLink: "/downloads/mobile-app.apk"
    },
    {
        id: 3,
        image: "/assets/work3.jpg",
        title: "Brand design",
        link: "brand-design",
        category: "design",
        description: "Complete visual identity and brand design project, including logo, color palette, typography, and brand guidelines. The design was created to convey modernity, trust, and innovation, maintaining consistency across all marketing materials.",
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "After Effects"],
        sections: [
            {
                title: "Visual Identity Elements",
                type: "list",
                content: [
                    "Main logo and variations",
                    "Complete color palette (primary and secondary)",
                    "Custom typography",
                    "Icon system",
                    "Brand guidelines",
                    "Templates for marketing materials"
                ]
            },
            {
                title: "Concept",
                type: "text",
                content: "The visual identity was created to convey modernity, trust, and innovation. Each element was carefully thought out to maintain consistency across all brand touchpoints, from the website to printed materials."
            },
            {
                title: "Deliverables",
                type: "list",
                content: [
                    "Complete visual identity manual",
                    "Vector logo files (AI, SVG, PDF)",
                    "Color palette in multiple formats",
                    "Icon library",
                    "Social media templates",
                    "Logo animations for videos"
                ]
            }
        ],
        additionalImages: [
            "/assets/work3.jpg",
            "/assets/work4.jpg",
            "/assets/work5.jpg"
        ],
        downloadLink: "/downloads/brand-design.zip"
    },
    {
        id: 4,
        image: "/assets/work4.jpg",
        title: "Mobile App",
        link: "fitness-app",
        category: "app",
        description: "Fitness and wellness application with exercise tracking features, personalized workout plans, and integration with wearable devices. The app offers a gamified experience to motivate users to achieve their health goals.",
        technologies: ["React Native", "Node.js", "PostgreSQL", "GraphQL", "AWS"],
        sections: [
            {
                title: "Main Features",
                type: "list",
                content: [
                    "Real-time exercise tracking",
                    "AI-powered personalized workout plans",
                    "Integration with wearable devices (Apple Watch, Fitbit)",
                    "Gamification system with achievements",
                    "Progress tracking with charts",
                    "Community and challenges between users"
                ]
            },
            {
                title: "User Experience",
                type: "text",
                content: "The app was designed to motivate users through gamification and constant visual feedback. The interface is intuitive and allows users to track their progress in a clear and motivating way."
            },
            {
                title: "Technologies",
                type: "list",
                content: [
                    "React Native for mobile app",
                    "Node.js and Express for backend",
                    "PostgreSQL for database",
                    "GraphQL for API",
                    "AWS for hosting and CDN",
                    "TensorFlow for personalized recommendations"
                ]
            }
        ],
        additionalImages: [
            "/assets/work4.jpg",
            "/assets/work5.jpg"
        ],
        downloadLink: "/downloads/fitness-app.apk"
    },
    {
        id: 6,
        image: "/assets/work1.jpg",
        title: "Web design",
        link: "nike-ecommerce",
        category: "web",
        description: "A modern e-commerce project developed for Nike, focused on user experience and responsive design. This project includes advanced shopping cart features, integrated payment system, and intuitive interface for product navigation.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "MongoDB"],
        sections: [
            {
                title: "Key Features",
                type: "list",
                content: [
                    "Advanced shopping cart with data persistence",
                    "Integrated payment system with Stripe",
                    "Responsive interface for all devices",
                    "Product search and filter system",
                    "Admin area for product management",
                    "User authentication with JWT"
                ]
            },
            {
                title: "About the Project",
                type: "text",
                content: "This project was developed with a focus on performance and user experience. We used the best practices of modern web development, including Server-Side Rendering (SSR) for better SEO and fast page loading."
            },
            {
                title: "Technologies Used",
                type: "list",
                content: [
                    "Next.js 14 with App Router",
                    "TypeScript for type safety",
                    "Tailwind CSS for styling",
                    "Stripe for payment processing",
                    "MongoDB for database",
                    "NextAuth.js for authentication"
                ]
            }
        ],
        additionalImages: [
            "/assets/work1.jpg",
            "/assets/work2.jpg"
        ],
        downloadLink: "/downloads/nike-ecommerce.zip"
    },

];

export const projectNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
];

