import React, { useState } from "react";
import { Modal, Button, Progress, Typography, Input } from "antd";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const Setup = () => {
  const [visible, setVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [emails, setEmails] = useState("");
  const [workspaceName, setWorkspaceName] = useState("Srikanth m's Workspace");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const stepsData = [
    {
      title: "What would you like to use ClickUp for?",
      options: ["Work", "Personal", "School"],
    },
    {
      title: "How large is your company?",
      options: [
        "1-10",
        "11-25",
        "26-250",
        "251-500",
        "501-2000",
        "2001+",
        "I don’t know",
      ],
    },
    {
      title: "How many people will you be working with?",
      options: [
        "Just me",
        "2-10",
        "11-25",
        "26-50",
        "51-250",
        "251-500",
        "501+",
        "I don’t know",
      ],
    },
    {
      title: "What would you like to manage?",
      options: [
        "Sales & CRM",
        "IT",
        "HR & Recruiting",
        "Startup",
        "Personal Use",
        "Finance & Accounting",
        "Professional Services",
        "Software Development",
        "PMO",
        "Support",
        "Creative & Design",
        "Operations",
        "Marketing",
        "Other",
      ],
    },
    {
      title: "How did you hear about us?",
      options: [
        "Facebook / Instagram",
        "Reddit",
        "LinkedIn",
        "Friend / Colleague",
        "TikTok",
        "TV / Streaming (Hulu, NBC, etc.)",
        "Software Review Sites",
        "YouTube",
        "Billboard",
        "Search Engine (Google, Bing, etc.)",
        "Snapchat",
        "Other",
      ],
    },
    {
      title: "Invite people to your Workspace:",
      isInput: true, // Input step
      placeholder: "Enter email addresses (or paste multiple)",
      inputValue: emails,
      onChange: (e) => setEmails(e.target.value),
    },
    {
      title: "Which features are you interested in trying?",
      options: [
        "Scheduling",
        "Automations",
        "Calendar",
        "Tasks & Projects",
        "Boards & Kanban",
        "Sprints",
        "Docs & Wikis",
        "CRM",
        "Gantt Charts",
        "Time Tracking",
        "Goals & OKRs",
        "Chat",
        "Workload",
        "Forms",
        "Dashboards",
        "Clips",
        "Ask AI",
        "Whiteboards",
      ],
    },
    {
      title: "Lastly, what would you like to name your Workspace?",
      isInput: true, // Input step
      placeholder: "Try the name of your company or organization",
      inputValue: workspaceName,
      onChange: (e) => setWorkspaceName(e.target.value),
      footer:
        "By completing this form, you agree to our Terms of Service and Privacy Policy.",
    },
  ];

  const handleNext = async () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setLoading(true); // Start loading
      setTimeout(() => {
        setLoading(false); // Stop loading
        setVisible(false); // Close modal
        navigate("/dashboard"); // Redirect to dashboard
      }, 2000); // 2 seconds delay for loading simulation
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentStep]: option,
    }));
  };

  const progressPercent = Math.round(((currentStep + 1) / stepsData.length) * 100);

  return (
    <Modal
      visible={visible}
      footer={null}
      closable={false}
      width={900}
      bodyStyle={{ padding: "24px" }}
    >
      <div className="setup-main">
        <div className="main-logo">
          <img
            src="https://hirolainfotech.com/images/logo.svg"
            alt="ClickUp Logo"
            style={{ height: 50 }}
          />
          <Title level={4}>Welcome, Srikanth M!</Title>
        </div>

        <div className="main-setup-body">
          <h3>{stepsData[currentStep].title}</h3>
          <div className="main-options">
            {stepsData[currentStep].options &&
              stepsData[currentStep].options.map((option) => (
                <p
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    backgroundColor:
                      selectedOptions[currentStep] === option
                        ? "#009cf1"
                        : "#fff",
                    color:
                      selectedOptions[currentStep] === option
                        ? "#ffffff"
                        : "#000000",
                  }}
                >
                  {option}
                </p>
              ))}

            {stepsData[currentStep].isInput && (
              <Input
                placeholder={stepsData[currentStep].placeholder}
                value={stepsData[currentStep].inputValue}
                onChange={stepsData[currentStep].onChange}
                style={{ marginTop: "16px" }}
              />
            )}
          </div>
        </div>

        {stepsData[currentStep].footer && (
          <div style={{ marginTop: "16px", textAlign: "center", color: "#888" }}>
            <Text>{stepsData[currentStep].footer}</Text>
          </div>
        )}

        <Progress percent={progressPercent} showInfo={false} style={{ marginTop: "24px" }} />

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <Button style={{ marginRight: "8px" }} onClick={handleBack} disabled={currentStep === 0}>
            Back
          </Button>
          <Button
            type="primary"
            onClick={handleNext}
            loading={loading}
            disabled={
              !selectedOptions[currentStep] && !stepsData[currentStep].isInput
            }
          >
            {currentStep < stepsData.length - 1 ? "Next" : "Finish"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Setup;



// import React, { useState } from "react";
// import { Modal, Button, Progress, Typography, Input } from "antd";

// const { Text, Title } = Typography;

// const Setup = () => {
//   const [visible, setVisible] = useState(true);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [emails, setEmails] = useState("");
//   const [workspaceName, setWorkspaceName] = useState("Srikanth m's Workspace");

//   const stepsData = [
//     {
//       title: "What would you like to use ClickUp for?",
//       options: ["Work", "Personal", "School"],
//     },
//     {
//       title: "How large is your company?",
//       options: [
//         "1-10",
//         "11-25",
//         "26-250",
//         "251-500",
//         "501-2000",
//         "2001+",
//         "I don’t know",
//       ],
//     },
//     {
//       title: "How many people will you be working with?",
//       options: [
//         "Just me",
//         "2-10",
//         "11-25",
//         "26-50",
//         "51-250",
//         "251-500",
//         "501+",
//         "I don’t know",
//       ],
//     },
//     {
//       title: "What would you like to manage?",
//       options: [
//         "Sales & CRM",
//         "IT",
//         "HR & Recruiting",
//         "Startup",
//         "Personal Use",
//         "Finance & Accounting",
//         "Professional Services",
//         "Software Development",
//         "PMO",
//         "Support",
//         "Creative & Design",
//         "Operations",
//         "Marketing",
//         "Other",
//       ],
//     },
//     {
//       title: "How did you hear about us?",
//       options: [
//         "Facebook / Instagram",
//         "Reddit",
//         "LinkedIn",
//         "Friend / Colleague",
//         "TikTok",
//         "TV / Streaming (Hulu, NBC, etc.)",
//         "Software Review Sites",
//         "YouTube",
//         "Billboard",
//         "Search Engine (Google, Bing, etc.)",
//         "Snapchat",
//         "Other",
//       ],
//     },
//     {
//       title: "Invite people to your Workspace:",
//       isInput: true, // Input step
//       placeholder: "Enter email addresses (or paste multiple)",
//       inputValue: emails,
//       onChange: (e) => setEmails(e.target.value),
//     },
//     {
//       title: "Which features are you interested in trying?",
//       options: [
//         "Scheduling",
//         "Automations",
//         "Calendar",
//         "Tasks & Projects",
//         "Boards & Kanban",
//         "Sprints",
//         "Docs & Wikis",
//         "CRM",
//         "Gantt Charts",
//         "Time Tracking",
//         "Goals & OKRs",
//         "Chat",
//         "Workload",
//         "Forms",
//         "Dashboards",
//         "Clips",
//         "Ask AI",
//         "Whiteboards",
//       ],
//     },
//     {
//       title: "Lastly, what would you like to name your Workspace?",
//       isInput: true, // Input step
//       placeholder: "Try the name of your company or organization",
//       inputValue: workspaceName,
//       onChange: (e) => setWorkspaceName(e.target.value),
//       footer:
//         "By completing this form, you agree to our Terms of Service and Privacy Policy.",
//     },
//   ];

//   const handleNext = () => {
//     if (currentStep < stepsData.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       setVisible(false); // Close modal on the last step
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOptions((prevOptions) => ({
//       ...prevOptions,
//       [currentStep]: option,
//     }));
//   };

//   // Calculate progress percentage based on steps completed
//   const progressPercent = Math.round(
//     ((currentStep + 1) / stepsData.length) * 100
//   );

//   return (
//     <Modal
//       visible={visible}
//       footer={null}
//       closable={false}
//       width={900}
//       bodyStyle={{ padding: "24px" }}
//     >
//       <div className="setup-main">
//         <div className="main-logo">
//           <img
//             src="https://hirolainfotech.com/images/logo.svg"
//             alt="ClickUp Logo"
//             style={{ height: 50 }}
//           />
//           <Title level={4}>Welcome, Srikanth M!</Title>
//         </div>

//         <div className="main-setup-body">
//           <h3>{stepsData[currentStep].title}</h3>
//           <div className="main-options">
//             {/* Render options for selection steps */}
//             {stepsData[currentStep].options &&
//               stepsData[currentStep].options.map((option) => (
//                 <p
//                   key={option}
//                   onClick={() => handleOptionSelect(option)}
//                   style={{
//                     backgroundColor:
//                       selectedOptions[currentStep] === option
//                         ? "#009cf1"
//                         : "#fff",
//                     color:
//                       selectedOptions[currentStep] === option
//                         ? "#ffffff"
//                         : "#000000",
//                   }}
//                 >
//                   {option}
//                 </p>
//               ))}

//             {/* Render input for input steps */}
//             {stepsData[currentStep].isInput && (
//               <Input
//                 placeholder={stepsData[currentStep].placeholder}
//                 value={stepsData[currentStep].inputValue}
//                 onChange={stepsData[currentStep].onChange}
//                 style={{ marginTop: "16px" }}
//               />
//             )}
//           </div>
//         </div>

//         {/* Footer text for the last step */}
//         {stepsData[currentStep].footer && (
//           <div
//             style={{ marginTop: "16px", textAlign: "center", color: "#888" }}
//           >
//             <Text>{stepsData[currentStep].footer}</Text>
//           </div>
//         )}

//         {/* Progress bar */}
//         <Progress
//           percent={progressPercent}
//           showInfo={false}
//           style={{ marginTop: "24px" }}
//         />

//         {/* Navigation Buttons */}
//         <div style={{ marginTop: "24px", textAlign: "center" }}>
//           <Button
//             style={{ marginRight: "8px" }}
//             onClick={handleBack}
//             disabled={currentStep === 0}
//           >
//             Back
//           </Button>
//           <Button
//             type="primary"
//             onClick={handleNext}
//             disabled={
//               !selectedOptions[currentStep] && !stepsData[currentStep].isInput
//             }
//           >
//             {currentStep < stepsData.length - 1 ? "Next" : "Finish"}
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default Setup;
