import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, GraduationCap } from "lucide-react";

// ToggleButton component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

// TabPanel component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

// Mock certificate data with local image paths
const certificateData = [
  { id: 1, Img: "/certificate1.png" },
  { id: 2, Img: "/certificate2.png" },
  { id: 3, Img: "/certificate3.png" },
  { id: 4, Img: "/certificate4.png" },
  { id: 5, Img: "/certificate5.png" },
  { id: 6, Img: "/certificate6.png" },
  { id: 7, Img: "/certificate7.png" },
  { id: 8, Img: "/certificate8.png" },
  { id: 9, Img: "/certificate9.png" },
  { id: 10, Img: "/certificate10.png" },
  { id: 11, Img: "/certificate11.png" },
  { id: 12, Img: "/certificate12.png" },
  { id: 13, Img: "/certificate13.png" },
  { id: 14, Img: "/certificate14.png" },
  { id: 15, Img: "/certificate15.png" },
  { id: 16, Img: "/certificate16.png" },
  { id: 17, Img: "/certificate17.png" },
  { id: 18, Img: "/certificate18.png" },
  { id: 19, Img: "/certificate19.png" },
  { id: 20, Img: "/certificate20.png" },
  { id: 21, Img: "/certificate21.png" },
];

const TimelineEducation = () => {
  const [activeInternship, setActiveInternship] = useState(0);
  const [autoSlide] = useState(true);

  const educationData = [
    {
      type: "internship",
      internships: [
        {
          title: "Edubyheart India Pvt Ltd, Bangalore",
          role: "Cyber security & Ethical Hacking Intern",
          duration: "27 Jan 2025 - 10 May 2025",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400">
  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
  <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path>
  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path>
  <path d="M8.65 22c.21-.66.45-1.32.57-2"></path>
  <path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path>
  <path d="M2 16h.01"></path>
  <path d="M21.8 16c.2-2 .131-5.354 0-6"></path>
  <path d="M9 6.8a6 6 0 0 1 9 5.2"></path>
</svg>
        },
        {
          title: "National Skill Development Corporation",
          role: "Data Engineer Intern",
          duration: "Oct 2024 - Dec 2024",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.27 6.96 12 12.01l8.73-5.05" /><path d="M12 22.08V12" /></svg>
        },
        {
          title: "Prodigy Infotech",
          role: "Cybersecurity Intern (Online)",
          duration: "01 Sept 2024 - 30 Sept 2024",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  <path d="M9 12l2 2 4-4"></path>
</svg>
        },
        {
          title: "Zephyr Technologies Pvt Ltd, Mangalore",
          role: "Data Science Intern",
          duration: "26 Oct 2023 - 23 Nov 2023",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
        }
      ]
    },
    {
      year: "July 2025",
      title: "Bachelor of Engineering in Computer Science",
      institution: "Yenepoya Institute of Technology, Moodbidri, Mangalore",
      description: "CGPA: 7.8",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
    },
    {
      year: "July 2021",
      title: "PUC (12th Standard)",
      institution: "Mahatma Gandhi Memorial College, Kunjibettu, Udupi District",
      description: "Stream: PCMCs\nPercentage: 60%",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
    },
    {
      year: "April 2019",
      title: "SSLC (10th Standard)",
      institution: "Milagres English Medium School, Kallianpur, Udupi District",
      description: "Percentage: 70%",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><path d="M12 2v4" /><path d="m7 7 2.5 2.5" /><path d="M3 12h4" /><path d="M17 7l-2.5 2.5" /><path d="M21 12h-4" /><path d="M12 18v4" /><path d="m17 17-2.5-2.5" /><path d="m7 17 2.5-2.5" /></svg>
    }
  ];

  // Auto-rotate internships
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      setActiveInternship((prev) => (prev + 1) % educationData[0].internships.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoSlide, educationData]);

  return (
    <div className="relative py-12 px-4">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Education & Experience
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4">
          My academic journey and professional milestones
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {educationData.map((item, index) => (
          <div key={index} className={`relative mb-16 last:mb-0 group`}>
            <div 
              className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-8`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              {/* Year Marker */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-24 h-24 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center backdrop-blur-sm group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-sm text-purple-300 font-medium">
                      {item.type === "internship" ? "Internships" : item.year}
                    </div>
                    <div className="mt-1 flex justify-center">
                      {item.type === "internship" ? (
                        <div className="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400 group-hover:rotate-12 transition-transform duration-300">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                          </span>
                        </div>
                      ) : (
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 min-w-0">
                {item.type === "internship" ? (
                  <div className={`p-6 rounded-xl bg-gray-900/50 border border-gray-700/50 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/30 group-hover:shadow-purple-500/20 hover:-translate-y-1 ${index % 2 === 0 ? 'ml-0 md:ml-8' : 'mr-0 md:mr-8'}`}>
                    {/* Internship slideshow */}
                    <div className="relative min-h-[120px]">
                      {item.internships.map((internship, i) => (
                        <div 
                          key={i}
                          className={`transition-all duration-500 ease-in-out ${i === activeInternship ? 'opacity-100' : 'absolute opacity-0 top-0 left-0'}`}
                        >
                          <div className="flex items-start gap-3 mb-2">
                            <div className="mt-1 flex-shrink-0">
                              {internship.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#6366f1] mb-1">
                                {internship.title}
                              </h3>
                              <p className="text-purple-300 font-medium">{internship.role}</p>
                            </div>
                          </div>
                          <p className="text-purple-300 ml-9">{internship.duration}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Simple Expanding Dot Navigation */}
                    <div className="mt-6 flex justify-center gap-2">
                      {item.internships.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveInternship(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${i === activeInternship ? 'bg-purple-500 w-6' : 'bg-gray-700 w-3 hover:bg-gray-600'}`}
                          aria-label={`Go to internship ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={`p-6 rounded-xl bg-gray-900/50 border border-gray-700/50 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/30 group-hover:shadow-purple-500/20 hover:-translate-y-1 ${index % 2 === 0 ? 'ml-0 md:ml-8' : 'mr-0 md:mr-8'}`}>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#6366f1] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-purple-300 font-medium mb-3">{item.institution}</p>
                    <p className="text-purple-300 whitespace-pre-line">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const projectCollection = collection(db, "projects");
      const projectSnapshot = await getDocs(projectCollection);

      const projectData = projectSnapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        Img: `/project${index + 1}.png`,
        TechStack: doc.data().TechStack || [],
      }));

      setProjects(projectData);
      localStorage.setItem("projects", JSON.stringify(projectData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const toggleShowMore = useCallback((type) => {
    switch (type) {
      case 'projects':
        setShowAllProjects(prev => !prev);
        break;
      case 'certificates':
        setShowAllCertificates(prev => !prev);
        break;
      default:
        break;
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificateData : certificateData.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portfolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<GraduationCap className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Education"
              {...a11yProps(2)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5 w-full">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    className="w-full h-full"
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-center">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4 w-full">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id}
                    className="w-full"
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificateData.length > initialItems && (
              <div className="mt-6 w-full flex justify-center">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <TimelineEducation />
          </TabPanel>

          <TabPanel value={value} index={3} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5 w-full">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    className="w-full"
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
