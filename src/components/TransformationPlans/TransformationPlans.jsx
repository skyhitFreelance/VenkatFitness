
// // // // // // // // // // // // // import React, { useMemo, useState } from "react";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   Box,
// // // // // // // // // // // // //   Button,
// // // // // // // // // // // // //   Card,
// // // // // // // // // // // // //   CardContent,
// // // // // // // // // // // // //   Dialog,
// // // // // // // // // // // // //   DialogActions,
// // // // // // // // // // // // //   DialogContent,
// // // // // // // // // // // // //   DialogTitle,
// // // // // // // // // // // // //   Tab,
// // // // // // // // // // // // //   Tabs,
// // // // // // // // // // // // //   TextField,
// // // // // // // // // // // // //   Typography,
// // // // // // // // // // // // // } from "@mui/material";
// // // // // // // // // // // // // import "./TransformationPlans.css";

// // // // // // // // // // // // // const backgroundImg = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80";
// // // // // // // // // // // // // const cardTexture = "https://www.transparenttextures.com/patterns/45-degree-fabric-light.png";
// // // // // // // // // // // // // const dumbbellImg = "https://pngimg.com/d/dumbbell_PNG16358.png";
// // // // // // // // // // // // // const bodyImg = "https://pngimg.com/d/bodybuilding_PNG39.png";

// // // // // // // // // // // // // const personalTrainingPlans = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 1,
// // // // // // // // // // // // //     price: "₹25,000",
// // // // // // // // // // // // //     gst: "+Gst",
// // // // // // // // // // // // //     oldPrice: "₹30,000",
// // // // // // // // // // // // //     months: "1 Month",
// // // // // // // // // // // // //     label: "Per 1 Month",
// // // // // // // // // // // // //     features: [
// // // // // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // // // //       "Certified trainers",
// // // // // // // // // // // // //       "Workout plan",
// // // // // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 2,
// // // // // // // // // // // // //     price: "₹70,000",
// // // // // // // // // // // // //     gst: "+Gst",
// // // // // // // // // // // // //     oldPrice: "₹84,000",
// // // // // // // // // // // // //     months: "3 Months",
// // // // // // // // // // // // //     label: "Per 3 Months",
// // // // // // // // // // // // //     features: [
// // // // // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // // // //       "Certified trainers",
// // // // // // // // // // // // //       "Workout plan",
// // // // // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 3,
// // // // // // // // // // // // //     price: "₹1,30,000",
// // // // // // // // // // // // //     gst: "+Gst",
// // // // // // // // // // // // //     oldPrice: "₹1,56,000",
// // // // // // // // // // // // //     months: "6 Months",
// // // // // // // // // // // // //     label: "Per 6 Months",
// // // // // // // // // // // // //     features: [
// // // // // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // // // //       "Certified trainers",
// // // // // // // // // // // // //       "Workout plan",
// // // // // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 4,
// // // // // // // // // // // // //     price: "₹2,50,000",
// // // // // // // // // // // // //     gst: "+Gst",
// // // // // // // // // // // // //     oldPrice: "₹2,88,000",
// // // // // // // // // // // // //     months: "12 Months",
// // // // // // // // // // // // //     label: "Per 12 Months",
// // // // // // // // // // // // //     features: [
// // // // // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // // // //       "Certified trainers",
// // // // // // // // // // // // //       "Workout plan",
// // // // // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // const premiumCustomizedPlans = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 5,
// // // // // // // // // // // // //     price: "₹40,000",
// // // // // // // // // // // // //     gst: "+Gst",
// // // // // // // // // // // // //     oldPrice: "₹48,000",
// // // // // // // // // // // // //     months: "1 Month",
// // // // // // // // // // // // //     label: "Per 1 Month",
// // // // // // // // // // // // //     features: [
// // // // // // // // // // // // //       "Premium assessment",
// // // // // // // // // // // // //       "Custom workout split",
// // // // // // // // // // // // //       "Advanced nutrition plan",
// // // // // // // // // // // // //       "Weekly body composition check",
// // // // // // // // // // // // //       "Lifestyle coaching",
// // // // // // // // // // // // //       "Priority trainer support",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 6,
// // // // // // // // // // // // //     price: "₹1,05,000",
// // // // // // // // // // // // //     gst: "+Gst",
// // // // // // // // // // // // //     oldPrice: "₹1,26,000",
// // // // // // // // // // // // //     months: "3 Months",
// // // // // // // // // // // // //     label: "Per 3 Months",
// // // // // // // // // // // // //     features: [
// // // // // // // // // // // // //       "Premium assessment",
// // // // // // // // // // // // //       "Custom workout split",
// // // // // // // // // // // // //       "Advanced nutrition plan",
// // // // // // // // // // // // //       "Weekly body composition check",
// // // // // // // // // // // // //       "Lifestyle coaching",
// // // // // // // // // // // // //       "Priority trainer support",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 7,
// // // // // // // // // // // // //     price: "₹1,95,000",
// // // // // // // // // // // // //     gst: "+Gst",
// // // // // // // // // // // // //     oldPrice: "₹2,34,000",
// // // // // // // // // // // // //     months: "6 Months",
// // // // // // // // // // // // //     label: "Per 6 Months",
// // // // // // // // // // // // //     features: [
// // // // // // // // // // // // //       "Premium assessment",
// // // // // // // // // // // // //       "Custom workout split",
// // // // // // // // // // // // //       "Advanced nutrition plan",
// // // // // // // // // // // // //       "Weekly body composition check",
// // // // // // // // // // // // //       "Lifestyle coaching",
// // // // // // // // // // // // //       "Priority trainer support",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 8,
// // // // // // // // // // // // //     price: "₹3,60,000",
// // // // // // // // // // // // //     gst: "+Gst",
// // // // // // // // // // // // //     oldPrice: "₹4,20,000",
// // // // // // // // // // // // //     months: "12 Months",
// // // // // // // // // // // // //     label: "Per 12 Months",
// // // // // // // // // // // // //     features: [
// // // // // // // // // // // // //       "Premium assessment",
// // // // // // // // // // // // //       "Custom workout split",
// // // // // // // // // // // // //       "Advanced nutrition plan",
// // // // // // // // // // // // //       "Weekly body composition check",
// // // // // // // // // // // // //       "Lifestyle coaching",
// // // // // // // // // // // // //       "Priority trainer support",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // export default function TransformationPlans() {
// // // // // // // // // // // // //   const [tabValue, setTabValue] = useState(0);
// // // // // // // // // // // // //   const [openForm, setOpenForm] = useState(false);
// // // // // // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // // // // // //     name: "",
// // // // // // // // // // // // //     phone: "",
// // // // // // // // // // // // //     email: "",
// // // // // // // // // // // // //     plan: "",
// // // // // // // // // // // // //     months: "",
// // // // // // // // // // // // //   });

// // // // // // // // // // // // //   const activePlans = useMemo(() => {
// // // // // // // // // // // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // // // // // // // // // // //   }, [tabValue]);

// // // // // // // // // // // // //   const activePlanName = tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // // // // // // // // // // //   const handleApply = (card) => {
// // // // // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       plan: activePlanName,
// // // // // // // // // // // // //       months: card.months,
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //     setOpenForm(true);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleChange = (field) => (event) => {
// // // // // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       [field]: event.target.value,
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleClose = () => setOpenForm(false);

// // // // // // // // // // // // //   const handleSubmit = (event) => {
// // // // // // // // // // // // //     event.preventDefault();
// // // // // // // // // // // // //     console.log("Submitted data:", formData);
// // // // // // // // // // // // //     setOpenForm(false);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <Box
// // // // // // // // // // // // //       className="plans-section"
// // // // // // // // // // // // //       sx={{
// // // // // // // // // // // // //         backgroundImage: `linear-gradient(rgba(8, 3, 53, 0.88), rgba(8, 3, 53, 0.92)), url(${backgroundImg})`,
// // // // // // // // // // // // //       }}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <Box className="plans-overlay-lines" />

// // // // // // // // // // // // //       <Box className="plans-content-wrap">
// // // // // // // // // // // // //         <Typography className="plans-title">Choose Your Transformation Plan</Typography>
// // // // // // // // // // // // //         <Typography className="plans-subtitle">
// // // // // // // // // // // // //           This is not a gym. This is a transformation system
// // // // // // // // // // // // //         </Typography>

// // // // // // // // // // // // //         <Box className="custom-tabs-wrap">
// // // // // // // // // // // // //           <Tabs
// // // // // // // // // // // // //             value={tabValue}
// // // // // // // // // // // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // // // // // // // // // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // // // // // // // // // // //             className="custom-tabs"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <Tab label="Personal Training" className="custom-tab" />
// // // // // // // // // // // // //             <Tab label="Premium Customized Plan" className="custom-tab" />
// // // // // // // // // // // // //           </Tabs>
// // // // // // // // // // // // //         </Box>

// // // // // // // // // // // // //         <Box className="offer-banner">
// // // // // // // // // // // // //           <Typography className="offer-small-text">
// // // // // // // // // // // // //             20% off on Personal Training Packages on the Ocassion of
// // // // // // // // // // // // //           </Typography>
// // // // // // // // // // // // //           <Typography className="offer-big-text">4TH GYM ANNIVERSARY</Typography>
// // // // // // // // // // // // //         </Box>

// // // // // // // // // // // // //         <Box className="plans-grid">
// // // // // // // // // // // // //           {activePlans.map((plan) => (
// // // // // // // // // // // // //             <Card
// // // // // // // // // // // // //               key={plan.id}
// // // // // // // // // // // // //               className="plan-card"
// // // // // // // // // // // // //               sx={{
// // // // // // // // // // // // //                 backgroundImage: `linear-gradient(180deg, rgba(12,105,120,0.92), rgba(4,71,84,0.96)), url(${cardTexture})`,
// // // // // // // // // // // // //               }}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <CardContent className="plan-card-content">
// // // // // // // // // // // // //                 <img src={dumbbellImg} alt="dumbbell" className="dumbbell-img" />

// // // // // // // // // // // // //                 <Typography className="plan-price-row">
// // // // // // // // // // // // //                   <span className="main-price">{plan.price}</span>
// // // // // // // // // // // // //                   <span className="gst-text">{plan.gst}</span>
// // // // // // // // // // // // //                 </Typography>

// // // // // // // // // // // // //                 <Typography className="old-price">{plan.oldPrice}</Typography>
// // // // // // // // // // // // //                 <Typography className="month-label">{plan.label}</Typography>

// // // // // // // // // // // // //                 <Box className="features-list">
// // // // // // // // // // // // //                   {plan.features.map((feature) => (
// // // // // // // // // // // // //                     <Box key={feature} className="feature-item">
// // // // // // // // // // // // //                       <span className="feature-dot">◉</span>
// // // // // // // // // // // // //                       <span>{feature}</span>
// // // // // // // // // // // // //                     </Box>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </Box>

// // // // // // // // // // // // //                 <Button className="apply-btn" onClick={() => handleApply(plan)}>
// // // // // // // // // // // // //                   Apply Now
// // // // // // // // // // // // //                 </Button>

// // // // // // // // // // // // //                 <img src={bodyImg} alt="human body" className="body-img" />
// // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </Box>
// // // // // // // // // // // // //       </Box>

// // // // // // // // // // // // //       <Dialog
// // // // // // // // // // // // //         open={openForm}
// // // // // // // // // // // // //         onClose={handleClose}
// // // // // // // // // // // // //         fullWidth
// // // // // // // // // // // // //         maxWidth="sm"
// // // // // // // // // // // // //         PaperProps={{ className: "popup-form-paper" }}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // // // // // // //           <DialogTitle className="popup-title">Apply for Plan</DialogTitle>
// // // // // // // // // // // // //           <DialogContent>
// // // // // // // // // // // // //             <Box className="popup-form-grid">
// // // // // // // // // // // // //               <TextField
// // // // // // // // // // // // //                 label="Full Name"
// // // // // // // // // // // // //                 fullWidth
// // // // // // // // // // // // //                 margin="normal"
// // // // // // // // // // // // //                 value={formData.name}
// // // // // // // // // // // // //                 onChange={handleChange("name")}
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //               <TextField
// // // // // // // // // // // // //                 label="Phone Number"
// // // // // // // // // // // // //                 fullWidth
// // // // // // // // // // // // //                 margin="normal"
// // // // // // // // // // // // //                 value={formData.phone}
// // // // // // // // // // // // //                 onChange={handleChange("phone")}
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //               <TextField
// // // // // // // // // // // // //                 label="Email Address"
// // // // // // // // // // // // //                 fullWidth
// // // // // // // // // // // // //                 margin="normal"
// // // // // // // // // // // // //                 value={formData.email}
// // // // // // // // // // // // //                 onChange={handleChange("email")}
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //               <TextField
// // // // // // // // // // // // //                 label="Plan"
// // // // // // // // // // // // //                 fullWidth
// // // // // // // // // // // // //                 margin="normal"
// // // // // // // // // // // // //                 value={formData.plan}
// // // // // // // // // // // // //                 InputProps={{ readOnly: true }}
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //               <TextField
// // // // // // // // // // // // //                 label="Months"
// // // // // // // // // // // // //                 fullWidth
// // // // // // // // // // // // //                 margin="normal"
// // // // // // // // // // // // //                 value={formData.months}
// // // // // // // // // // // // //                 InputProps={{ readOnly: true }}
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //             </Box>
// // // // // // // // // // // // //           </DialogContent>
// // // // // // // // // // // // //           <DialogActions sx={{ px: 3, pb: 3 }}>
// // // // // // // // // // // // //             <Button onClick={handleClose} variant="outlined">
// // // // // // // // // // // // //               Cancel
// // // // // // // // // // // // //             </Button>
// // // // // // // // // // // // //             <Button type="submit" variant="contained">
// // // // // // // // // // // // //               Submit
// // // // // // // // // // // // //             </Button>
// // // // // // // // // // // // //           </DialogActions>
// // // // // // // // // // // // //         </form>
// // // // // // // // // // // // //       </Dialog>
// // // // // // // // // // // // //     </Box>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }


// // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // import {
// // // // // // // // // // // //   Box,
// // // // // // // // // // // //   Tabs,
// // // // // // // // // // // //   Tab,
// // // // // // // // // // // //   Card,
// // // // // // // // // // // //   CardContent,
// // // // // // // // // // // //   Typography,
// // // // // // // // // // // //   Button,
// // // // // // // // // // // //   Dialog,
// // // // // // // // // // // //   DialogTitle,
// // // // // // // // // // // //   DialogContent,
// // // // // // // // // // // //   DialogActions,
// // // // // // // // // // // //   TextField,
// // // // // // // // // // // // } from "@mui/material";
// // // // // // // // // // // // import "./TransformationPlans.css";

// // // // // // // // // // // // const dumbbell =
// // // // // // // // // // // //   "https://pngimg.com/uploads/dumbbell/dumbbell_PNG16358.png";
// // // // // // // // // // // // const body =
// // // // // // // // // // // //   "https://pngimg.com/uploads/bodybuilding/bodybuilding_PNG39.png";

// // // // // // // // // // // // const plans = [
// // // // // // // // // // // //   { price: "₹25,000", old: "₹30,000", months: "1 Month" },
// // // // // // // // // // // //   { price: "₹70,000", old: "₹84,000", months: "3 Months" },
// // // // // // // // // // // //   { price: "₹1,30,000", old: "₹1,56,000", months: "6 Months" },
// // // // // // // // // // // //   { price: "₹2,50,000", old: "₹2,88,000", months: "12 Months" },
// // // // // // // // // // // // ];

// // // // // // // // // // // // export default function TransformationPlans() {
// // // // // // // // // // // //   const [tab, setTab] = useState(0);
// // // // // // // // // // // //   const [open, setOpen] = useState(false);
// // // // // // // // // // // //   const [form, setForm] = useState({
// // // // // // // // // // // //     name: "",
// // // // // // // // // // // //     phone: "",
// // // // // // // // // // // //     email: "",
// // // // // // // // // // // //     plan: "",
// // // // // // // // // // // //     months: "",
// // // // // // // // // // // //   });

// // // // // // // // // // // //   const handleApply = (item) => {
// // // // // // // // // // // //     setForm({
// // // // // // // // // // // //       ...form,
// // // // // // // // // // // //       plan: tab === 0 ? "Personal Training" : "Premium Plan",
// // // // // // // // // // // //       months: item.months,
// // // // // // // // // // // //     });
// // // // // // // // // // // //     setOpen(true);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <Box className="wrapper">
// // // // // // // // // // // //       <Typography className="title">
// // // // // // // // // // // //         Choose Your Transformation Plan
// // // // // // // // // // // //       </Typography>
// // // // // // // // // // // //       <Typography className="subtitle">
// // // // // // // // // // // //         This is not a gym. This is a transformation system
// // // // // // // // // // // //       </Typography>

// // // // // // // // // // // //       {/* Tabs */}
// // // // // // // // // // // //       <Box className="tabsWrap">
// // // // // // // // // // // //         <Tabs value={tab} onChange={(e, v) => setTab(v)}>
// // // // // // // // // // // //           <Tab label="Personal Training" />
// // // // // // // // // // // //           <Tab label="Premium Customized Plan" />
// // // // // // // // // // // //         </Tabs>
// // // // // // // // // // // //       </Box>

// // // // // // // // // // // //       {/* Offer */}
// // // // // // // // // // // //       <Box className="offer">
// // // // // // // // // // // //         <p>20% off on Personal Training Packages on the Ocassion of</p>
// // // // // // // // // // // //         <h2>4TH GYM ANNIVERSARY</h2>
// // // // // // // // // // // //       </Box>

// // // // // // // // // // // //       {/* Cards */}
// // // // // // // // // // // //       <Box className="cards">
// // // // // // // // // // // //         {plans.map((item, i) => (
// // // // // // // // // // // //           <Card key={i} className="card">
// // // // // // // // // // // //             <CardContent>
// // // // // // // // // // // //               <img src={dumbbell} className="dumbbell" />

// // // // // // // // // // // //               <h3>{item.price} <span>+Gst</span></h3>
// // // // // // // // // // // //               <p className="old">{item.old}</p>
// // // // // // // // // // // //               <p className="month">Per {item.months}</p>

// // // // // // // // // // // //               <ul>
// // // // // // // // // // // //                 <li>1-on-1 personal training</li>
// // // // // // // // // // // //                 <li>5 sessions per week</li>
// // // // // // // // // // // //                 <li>Certified trainers</li>
// // // // // // // // // // // //                 <li>Workout plan</li>
// // // // // // // // // // // //                 <li>Basic diet guidance</li>
// // // // // // // // // // // //                 <li>Weekly progress tracking</li>
// // // // // // // // // // // //               </ul>

// // // // // // // // // // // //               <Button onClick={() => handleApply(item)}>
// // // // // // // // // // // //                 Apply Now
// // // // // // // // // // // //               </Button>

// // // // // // // // // // // //               <img src={body} className="body" />
// // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // //           </Card>
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </Box>

// // // // // // // // // // // //       {/* Popup Form */}
// // // // // // // // // // // //       <Dialog open={open} onClose={() => setOpen(false)}>
// // // // // // // // // // // //         <DialogTitle>Apply</DialogTitle>
// // // // // // // // // // // //         <DialogContent>
// // // // // // // // // // // //           <TextField label="Name" fullWidth margin="dense" />
// // // // // // // // // // // //           <TextField label="Phone" fullWidth margin="dense" />
// // // // // // // // // // // //           <TextField label="Email" fullWidth margin="dense" />
// // // // // // // // // // // //           <TextField value={form.plan} label="Plan" fullWidth margin="dense" />
// // // // // // // // // // // //           <TextField value={form.months} label="Months" fullWidth margin="dense" />
// // // // // // // // // // // //         </DialogContent>
// // // // // // // // // // // //         <DialogActions>
// // // // // // // // // // // //           <Button onClick={() => setOpen(false)}>Cancel</Button>
// // // // // // // // // // // //           <Button variant="contained">Submit</Button>
// // // // // // // // // // // //         </DialogActions>
// // // // // // // // // // // //       </Dialog>
// // // // // // // // // // // //     </Box>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // import React, { useMemo, useState } from "react";
// // // // // // // // // // // import {
// // // // // // // // // // //   Box,
// // // // // // // // // // //   Button,
// // // // // // // // // // //   Card,
// // // // // // // // // // //   CardContent,
// // // // // // // // // // //   Dialog,
// // // // // // // // // // //   DialogActions,
// // // // // // // // // // //   DialogContent,
// // // // // // // // // // //   DialogTitle,
// // // // // // // // // // //   Tab,
// // // // // // // // // // //   Tabs,
// // // // // // // // // // //   TextField,
// // // // // // // // // // //   Typography,
// // // // // // // // // // // } from "@mui/material";
// // // // // // // // // // // import "./TransformationPlans.css";

// // // // // // // // // // // const sectionBg =
// // // // // // // // // // //   "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=80";

// // // // // // // // // // // const cardTexture =
// // // // // // // // // // //   "https://www.transparenttextures.com/patterns/asfalt-light.png";

// // // // // // // // // // // const dumbbellImg =
// // // // // // // // // // //   "https://venketfitness.com/plans-images/barbell-01.png";

// // // // // // // // // // // const humanBodyImg =
// // // // // // // // // // //   "https://pngimg.com/uploads/bodybuilding/bodybuilding_PNG39.png";

// // // // // // // // // // // const personalTrainingPlans = [
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 1,
// // // // // // // // // // //     price: "₹25,000",
// // // // // // // // // // //     oldPrice: "₹30,000",
// // // // // // // // // // //     months: "1 Month",
// // // // // // // // // // //     perLabel: "Per 1 Month",
// // // // // // // // // // //     features: [
// // // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // //       "Certified trainers",
// // // // // // // // // // //       "Workout plan",
// // // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 2,
// // // // // // // // // // //     price: "₹70,000",
// // // // // // // // // // //     oldPrice: "₹84,000",
// // // // // // // // // // //     months: "3 Months",
// // // // // // // // // // //     perLabel: "Per 3 Months",
// // // // // // // // // // //     features: [
// // // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // //       "Certified trainers",
// // // // // // // // // // //       "Workout plan",
// // // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 3,
// // // // // // // // // // //     price: "₹1,30,000",
// // // // // // // // // // //     oldPrice: "₹1,56,000",
// // // // // // // // // // //     months: "6 Months",
// // // // // // // // // // //     perLabel: "Per 6 Months",
// // // // // // // // // // //     features: [
// // // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // //       "Certified trainers",
// // // // // // // // // // //       "Workout plan",
// // // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 4,
// // // // // // // // // // //     price: "₹2,50,000",
// // // // // // // // // // //     oldPrice: "₹2,88,000",
// // // // // // // // // // //     months: "12 Months",
// // // // // // // // // // //     perLabel: "Per 12 Months",
// // // // // // // // // // //     features: [
// // // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // //       "Certified trainers",
// // // // // // // // // // //       "Workout plan",
// // // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // const premiumCustomizedPlans = [
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 5,
// // // // // // // // // // //     price: "₹40,000",
// // // // // // // // // // //     oldPrice: "₹48,000",
// // // // // // // // // // //     months: "1 Month",
// // // // // // // // // // //     perLabel: "Per 1 Month",
// // // // // // // // // // //     features: [
// // // // // // // // // // //       "Customized training",
// // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // //       "Premium trainers",
// // // // // // // // // // //       "Workout plan",
// // // // // // // // // // //       "Advanced diet guidance",
// // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 6,
// // // // // // // // // // //     price: "₹1,05,000",
// // // // // // // // // // //     oldPrice: "₹1,26,000",
// // // // // // // // // // //     months: "3 Months",
// // // // // // // // // // //     perLabel: "Per 3 Months",
// // // // // // // // // // //     features: [
// // // // // // // // // // //       "Customized training",
// // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // //       "Premium trainers",
// // // // // // // // // // //       "Workout plan",
// // // // // // // // // // //       "Advanced diet guidance",
// // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 7,
// // // // // // // // // // //     price: "₹1,95,000",
// // // // // // // // // // //     oldPrice: "₹2,34,000",
// // // // // // // // // // //     months: "6 Months",
// // // // // // // // // // //     perLabel: "Per 6 Months",
// // // // // // // // // // //     features: [
// // // // // // // // // // //       "Customized training",
// // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // //       "Premium trainers",
// // // // // // // // // // //       "Workout plan",
// // // // // // // // // // //       "Advanced diet guidance",
// // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 8,
// // // // // // // // // // //     price: "₹3,60,000",
// // // // // // // // // // //     oldPrice: "₹4,20,000",
// // // // // // // // // // //     months: "12 Months",
// // // // // // // // // // //     perLabel: "Per 12 Months",
// // // // // // // // // // //     features: [
// // // // // // // // // // //       "Customized training",
// // // // // // // // // // //       "5 sessions per week",
// // // // // // // // // // //       "Premium trainers",
// // // // // // // // // // //       "Workout plan",
// // // // // // // // // // //       "Advanced diet guidance",
// // // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // const cardBgByIndex = [
// // // // // // // // // // //   "linear-gradient(180deg, rgba(10,132,146,0.92), rgba(3,97,109,0.96))",
// // // // // // // // // // //   "linear-gradient(180deg, rgba(5,102,118,0.92), rgba(2,79,90,0.97))",
// // // // // // // // // // //   "linear-gradient(180deg, rgba(10,132,146,0.92), rgba(3,97,109,0.96))",
// // // // // // // // // // //   "linear-gradient(180deg, rgba(5,102,118,0.92), rgba(2,79,90,0.97))",
// // // // // // // // // // // ];

// // // // // // // // // // // export default function TransformationPlans() {
// // // // // // // // // // //   const [tabValue, setTabValue] = useState(0);
// // // // // // // // // // //   const [openForm, setOpenForm] = useState(false);
// // // // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // // // //     name: "",
// // // // // // // // // // //     phone: "",
// // // // // // // // // // //     email: "",
// // // // // // // // // // //     plan: "",
// // // // // // // // // // //     months: "",
// // // // // // // // // // //   });

// // // // // // // // // // //   const activePlans = useMemo(() => {
// // // // // // // // // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // // // // // // // // //   }, [tabValue]);

// // // // // // // // // // //   const activePlanName =
// // // // // // // // // // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // // // // // // // // //   const handleApplyNow = (plan) => {
// // // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // // //       ...prev,
// // // // // // // // // // //       plan: activePlanName,
// // // // // // // // // // //       months: plan.months,
// // // // // // // // // // //     }));
// // // // // // // // // // //     setOpenForm(true);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleFieldChange = (field) => (event) => {
// // // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // // //       ...prev,
// // // // // // // // // // //       [field]: event.target.value,
// // // // // // // // // // //     }));
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSubmit = (event) => {
// // // // // // // // // // //     event.preventDefault();
// // // // // // // // // // //     console.log("Form submitted:", formData);
// // // // // // // // // // //     setOpenForm(false);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <Box
// // // // // // // // // // //       className="tp-section"
// // // // // // // // // // //       sx={{
// // // // // // // // // // //         backgroundImage: `linear-gradient(rgba(7,0,56,0.90), rgba(7,0,56,0.95)), url(${sectionBg})`,
// // // // // // // // // // //       }}
// // // // // // // // // // //     >
// // // // // // // // // // //       <Box className="tp-decor tp-decor-top-left" />
// // // // // // // // // // //       <Box className="tp-decor tp-decor-top-mid" />
// // // // // // // // // // //       <Box className="tp-decor tp-decor-top-right" />
// // // // // // // // // // //       <Box className="tp-decor tp-decor-slant-left" />
// // // // // // // // // // //       <Box className="tp-decor tp-decor-slant-right" />
// // // // // // // // // // //       <Box className="tp-decor tp-decor-bottom-glow" />

// // // // // // // // // // //       <Box className="tp-container">
// // // // // // // // // // //         <Typography className="tp-title">
// // // // // // // // // // //           Choose Your Transformation Plan
// // // // // // // // // // //         </Typography>

// // // // // // // // // // //         <Typography className="tp-subtitle">
// // // // // // // // // // //           This is not a gym. This is a transformation system
// // // // // // // // // // //         </Typography>

// // // // // // // // // // //         <Box className="tp-tabs-wrapper">
// // // // // // // // // // //           <Tabs
// // // // // // // // // // //             value={tabValue}
// // // // // // // // // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // // // // // // // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // // // // // // // // //             className="tp-tabs"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Tab label="Personal Training" className="tp-tab" />
// // // // // // // // // // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // // // // // // // // // //           </Tabs>
// // // // // // // // // // //         </Box>

// // // // // // // // // // //         <Box className="tp-offer-brush">
// // // // // // // // // // //           <Typography className="tp-offer-small">
// // // // // // // // // // //             20% off on Personal Training Packages on the Ocassion of
// // // // // // // // // // //           </Typography>
// // // // // // // // // // //           <Typography className="tp-offer-big">
// // // // // // // // // // //             4TH GYM ANNIVERSARY
// // // // // // // // // // //           </Typography>
// // // // // // // // // // //         </Box>

// // // // // // // // // // //         <Box className="tp-cards-grid">
// // // // // // // // // // //           {activePlans.map((plan, index) => (
// // // // // // // // // // //             <Card
// // // // // // // // // // //               key={plan.id}
// // // // // // // // // // //               className={`tp-card ${index === 0 ? "tp-card-first" : ""} ${
// // // // // // // // // // //                 index === activePlans.length - 1 ? "tp-card-last" : ""
// // // // // // // // // // //               }`}
// // // // // // // // // // //               sx={{
// // // // // // // // // // //                 backgroundImage: `${cardBgByIndex[index]}, url(${cardTexture})`,
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <CardContent className="tp-card-content">
// // // // // // // // // // //                 <Box className="tp-top-price-row">
// // // // // // // // // // //                   <Typography className="tp-main-price">{plan.price}</Typography>
// // // // // // // // // // //                   <Typography className="tp-gst">+Gst</Typography>
// // // // // // // // // // //                 </Box>

// // // // // // // // // // //                 <Typography className="tp-old-price">
// // // // // // // // // // //                   {plan.oldPrice}
// // // // // // // // // // //                 </Typography>

// // // // // // // // // // //                 <Box className="tp-dumbbell-row">
// // // // // // // // // // //                   <img
// // // // // // // // // // //                     src={dumbbellImg}
// // // // // // // // // // //                     alt="Dumbbell"
// // // // // // // // // // //                     className="tp-dumbbell-image"
// // // // // // // // // // //                   />
// // // // // // // // // // //                 </Box>

// // // // // // // // // // //                 <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // // // // // // // // // //                 <Box className="tp-features-list">
// // // // // // // // // // //                   {plan.features.map((feature) => (
// // // // // // // // // // //                     <Box className="tp-feature-item" key={feature}>
// // // // // // // // // // //                       <span className="tp-feature-bullet">◉</span>
// // // // // // // // // // //                       <span>{feature}</span>
// // // // // // // // // // //                     </Box>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </Box>

// // // // // // // // // // //                 <Button
// // // // // // // // // // //                   className="tp-apply-btn"
// // // // // // // // // // //                   onClick={() => handleApplyNow(plan)}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Apply Now
// // // // // // // // // // //                 </Button>

// // // // // // // // // // //                 <img
// // // // // // // // // // //                   src={humanBodyImg}
// // // // // // // // // // //                   alt="Human Body"
// // // // // // // // // // //                   className="tp-human-body"
// // // // // // // // // // //                 />
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </Box>
// // // // // // // // // // //       </Box>

// // // // // // // // // // //       <Dialog
// // // // // // // // // // //         open={openForm}
// // // // // // // // // // //         onClose={() => setOpenForm(false)}
// // // // // // // // // // //         fullWidth
// // // // // // // // // // //         maxWidth="sm"
// // // // // // // // // // //         PaperProps={{ className: "tp-dialog-paper" }}
// // // // // // // // // // //       >
// // // // // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // // // // //           <DialogTitle className="tp-dialog-title">
// // // // // // // // // // //             Apply for Plan
// // // // // // // // // // //           </DialogTitle>

// // // // // // // // // // //           <DialogContent>
// // // // // // // // // // //             <TextField
// // // // // // // // // // //               fullWidth
// // // // // // // // // // //               margin="normal"
// // // // // // // // // // //               label="Full Name"
// // // // // // // // // // //               value={formData.name}
// // // // // // // // // // //               onChange={handleFieldChange("name")}
// // // // // // // // // // //             />

// // // // // // // // // // //             <TextField
// // // // // // // // // // //               fullWidth
// // // // // // // // // // //               margin="normal"
// // // // // // // // // // //               label="Phone Number"
// // // // // // // // // // //               value={formData.phone}
// // // // // // // // // // //               onChange={handleFieldChange("phone")}
// // // // // // // // // // //             />

// // // // // // // // // // //             <TextField
// // // // // // // // // // //               fullWidth
// // // // // // // // // // //               margin="normal"
// // // // // // // // // // //               label="Email Address"
// // // // // // // // // // //               value={formData.email}
// // // // // // // // // // //               onChange={handleFieldChange("email")}
// // // // // // // // // // //             />

// // // // // // // // // // //             <TextField
// // // // // // // // // // //               fullWidth
// // // // // // // // // // //               margin="normal"
// // // // // // // // // // //               label="Plan"
// // // // // // // // // // //               value={formData.plan}
// // // // // // // // // // //               InputProps={{ readOnly: true }}
// // // // // // // // // // //             />

// // // // // // // // // // //             <TextField
// // // // // // // // // // //               fullWidth
// // // // // // // // // // //               margin="normal"
// // // // // // // // // // //               label="Months"
// // // // // // // // // // //               value={formData.months}
// // // // // // // // // // //               InputProps={{ readOnly: true }}
// // // // // // // // // // //             />
// // // // // // // // // // //           </DialogContent>

// // // // // // // // // // //           <DialogActions sx={{ px: 3, pb: 3 }}>
// // // // // // // // // // //             <Button onClick={() => setOpenForm(false)} variant="outlined">
// // // // // // // // // // //               Cancel
// // // // // // // // // // //             </Button>
// // // // // // // // // // //             <Button type="submit" variant="contained">
// // // // // // // // // // //               Submit
// // // // // // // // // // //             </Button>
// // // // // // // // // // //           </DialogActions>
// // // // // // // // // // //         </form>
// // // // // // // // // // //       </Dialog>
// // // // // // // // // // //     </Box>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // import React, { useMemo, useState } from "react";
// // // // // // // // // // import {
// // // // // // // // // //   Box,
// // // // // // // // // //   Button,
// // // // // // // // // //   Card,
// // // // // // // // // //   CardContent,
// // // // // // // // // //   Dialog,
// // // // // // // // // //   DialogActions,
// // // // // // // // // //   DialogContent,
// // // // // // // // // //   DialogTitle,
// // // // // // // // // //   Tab,
// // // // // // // // // //   Tabs,
// // // // // // // // // //   TextField,
// // // // // // // // // //   Typography,
// // // // // // // // // // } from "@mui/material";

// // // // // // // // // // import "./TransformationPlans.css";

// // // // // // // // // // const sectionBg =
// // // // // // // // // //   "https://venketfitness.com/plans-images/vf-bg.webp";

// // // // // // // // // // const cardTexture =
// // // // // // // // // //   "https://venketfitness.com/plans-images/Group.webp";

// // // // // // // // // // /* ✅ 4 DIFFERENT DUMBBELL IMAGES */
// // // // // // // // // // const dumbbellImages = [
// // // // // // // // // //   "https://venketfitness.com/plans-images/barbell-01.png",
// // // // // // // // // //   "https://venketfitness.com/plans-images/barbell-02.png",
// // // // // // // // // //   "https://venketfitness.com/plans-images/barbell-03.png",
// // // // // // // // // //   "https://venketfitness.com/plans-images/barbell-04.png",
// // // // // // // // // // ];

// // // // // // // // // // /* ✅ 4 DIFFERENT HUMAN BODY IMAGES */
// // // // // // // // // // const humanBodyImages = [
// // // // // // // // // //   "https://venketfitness.com/plans-images/1st-body.png",
// // // // // // // // // //   "https://venketfitness.com/plans-images/2nd-body.png",
// // // // // // // // // //   "https://venketfitness.com/plans-images/3rd-body.png",
// // // // // // // // // //   "https://venketfitness.com/plans-images/4th-body.png",
// // // // // // // // // // ];

// // // // // // // // // // const personalTrainingPlans = [
// // // // // // // // // //   {
// // // // // // // // // //     id: 1,
// // // // // // // // // //     price: "₹25,000",
// // // // // // // // // //     oldPrice: "₹30,000",
// // // // // // // // // //     months: "1 Month",
// // // // // // // // // //     perLabel: "Per 1 Month",
// // // // // // // // // //     features: [
// // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // //       "5 sessions per week",
// // // // // // // // // //       "Certified trainers",
// // // // // // // // // //       "Workout plan",
// // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 2,
// // // // // // // // // //     price: "₹70,000",
// // // // // // // // // //     oldPrice: "₹84,000",
// // // // // // // // // //     months: "3 Months",
// // // // // // // // // //     perLabel: "Per 3 Months",
// // // // // // // // // //     features: [
// // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // //       "5 sessions per week",
// // // // // // // // // //       "Certified trainers",
// // // // // // // // // //       "Workout plan",
// // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 3,
// // // // // // // // // //     price: "₹1,30,000",
// // // // // // // // // //     oldPrice: "₹1,56,000",
// // // // // // // // // //     months: "6 Months",
// // // // // // // // // //     perLabel: "Per 6 Months",
// // // // // // // // // //     features: [
// // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // //       "5 sessions per week",
// // // // // // // // // //       "Certified trainers",
// // // // // // // // // //       "Workout plan",
// // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 4,
// // // // // // // // // //     price: "₹2,50,000",
// // // // // // // // // //     oldPrice: "₹2,88,000",
// // // // // // // // // //     months: "12 Months",
// // // // // // // // // //     perLabel: "Per 12 Months",
// // // // // // // // // //     features: [
// // // // // // // // // //       "1-on-1 personal training",
// // // // // // // // // //       "5 sessions per week",
// // // // // // // // // //       "Certified trainers",
// // // // // // // // // //       "Workout plan",
// // // // // // // // // //       "Basic diet guidance",
// // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // const premiumCustomizedPlans = [
// // // // // // // // // //   {
// // // // // // // // // //     id: 5,
// // // // // // // // // //     price: "₹40,000",
// // // // // // // // // //     oldPrice: "₹48,000",
// // // // // // // // // //     months: "1 Month",
// // // // // // // // // //     perLabel: "Per 1 Month",
// // // // // // // // // //     features: [
// // // // // // // // // //       "Customized training",
// // // // // // // // // //       "5 sessions per week",
// // // // // // // // // //       "Premium trainers",
// // // // // // // // // //       "Workout plan",
// // // // // // // // // //       "Advanced diet guidance",
// // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 6,
// // // // // // // // // //     price: "₹1,05,000",
// // // // // // // // // //     oldPrice: "₹1,26,000",
// // // // // // // // // //     months: "3 Months",
// // // // // // // // // //     perLabel: "Per 3 Months",
// // // // // // // // // //     features: [
// // // // // // // // // //       "Customized training",
// // // // // // // // // //       "5 sessions per week",
// // // // // // // // // //       "Premium trainers",
// // // // // // // // // //       "Workout plan",
// // // // // // // // // //       "Advanced diet guidance",
// // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 7,
// // // // // // // // // //     price: "₹1,95,000",
// // // // // // // // // //     oldPrice: "₹2,34,000",
// // // // // // // // // //     months: "6 Months",
// // // // // // // // // //     perLabel: "Per 6 Months",
// // // // // // // // // //     features: [
// // // // // // // // // //       "Customized training",
// // // // // // // // // //       "5 sessions per week",
// // // // // // // // // //       "Premium trainers",
// // // // // // // // // //       "Workout plan",
// // // // // // // // // //       "Advanced diet guidance",
// // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 8,
// // // // // // // // // //     price: "₹3,60,000",
// // // // // // // // // //     oldPrice: "₹4,20,000",
// // // // // // // // // //     months: "12 Months",
// // // // // // // // // //     perLabel: "Per 12 Months",
// // // // // // // // // //     features: [
// // // // // // // // // //       "Customized training",
// // // // // // // // // //       "5 sessions per week",
// // // // // // // // // //       "Premium trainers",
// // // // // // // // // //       "Workout plan",
// // // // // // // // // //       "Advanced diet guidance",
// // // // // // // // // //       "Weekly progress tracking",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // const cardBgByIndex = [
// // // // // // // // // //   "linear-gradient(180deg, rgba(10,132,146,0.92), rgba(3,97,109,0.96))",
// // // // // // // // // //   "linear-gradient(180deg, rgba(5,102,118,0.92), rgba(2,79,90,0.97))",
// // // // // // // // // //   "linear-gradient(180deg, rgba(10,132,146,0.92), rgba(3,97,109,0.96))",
// // // // // // // // // //   "linear-gradient(180deg, rgba(5,102,118,0.92), rgba(2,79,90,0.97))",
// // // // // // // // // // ];

// // // // // // // // // // export default function TransformationPlans() {
// // // // // // // // // //   const [tabValue, setTabValue] = useState(0);

// // // // // // // // // //   const [openForm, setOpenForm] = useState(false);

// // // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // // //     name: "",
// // // // // // // // // //     phone: "",
// // // // // // // // // //     email: "",
// // // // // // // // // //     plan: "",
// // // // // // // // // //     months: "",
// // // // // // // // // //   });

// // // // // // // // // //   const activePlans = useMemo(() => {
// // // // // // // // // //     return tabValue === 0
// // // // // // // // // //       ? personalTrainingPlans
// // // // // // // // // //       : premiumCustomizedPlans;
// // // // // // // // // //   }, [tabValue]);

// // // // // // // // // //   const activePlanName =
// // // // // // // // // //     tabValue === 0
// // // // // // // // // //       ? "Personal Training"
// // // // // // // // // //       : "Premium Customized Plan";

// // // // // // // // // //   const handleApplyNow = (plan) => {
// // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // //       ...prev,
// // // // // // // // // //       plan: activePlanName,
// // // // // // // // // //       months: plan.months,
// // // // // // // // // //     }));

// // // // // // // // // //     setOpenForm(true);
// // // // // // // // // //   };

// // // // // // // // // //   const handleFieldChange = (field) => (event) => {
// // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // //       ...prev,
// // // // // // // // // //       [field]: event.target.value,
// // // // // // // // // //     }));
// // // // // // // // // //   };

// // // // // // // // // //   const handleSubmit = (event) => {
// // // // // // // // // //     event.preventDefault();
// // // // // // // // // //     console.log("Form submitted:", formData);
// // // // // // // // // //     setOpenForm(false);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <Box
// // // // // // // // // //       className="tp-section"
// // // // // // // // // //       sx={{
// // // // // // // // // //         backgroundImage: `linear-gradient(rgba(7,0,56,0.90), rgba(7,0,56,0.95)), url(${sectionBg})`,
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       <Box className="tp-container">
// // // // // // // // // //         <Typography className="tp-title">
// // // // // // // // // //           Choose Your Transformation Plan
// // // // // // // // // //         </Typography>

// // // // // // // // // //         <Typography className="tp-subtitle">
// // // // // // // // // //           This is not a gym. This is a transformation system
// // // // // // // // // //         </Typography>

// // // // // // // // // //         <Box className="tp-tabs-wrapper">
// // // // // // // // // //           <Tabs
// // // // // // // // // //             value={tabValue}
// // // // // // // // // //             onChange={(_, newValue) =>
// // // // // // // // // //               setTabValue(newValue)
// // // // // // // // // //             }
// // // // // // // // // //             TabIndicatorProps={{
// // // // // // // // // //               style: { display: "none" },
// // // // // // // // // //             }}
// // // // // // // // // //             className="tp-tabs"
// // // // // // // // // //           >
// // // // // // // // // //             <Tab
// // // // // // // // // //               label="Personal Training"
// // // // // // // // // //               className="tp-tab"
// // // // // // // // // //             />
// // // // // // // // // //             <Tab
// // // // // // // // // //               label="Premium Customized Plan"
// // // // // // // // // //               className="tp-tab"
// // // // // // // // // //             />
// // // // // // // // // //           </Tabs>
// // // // // // // // // //         </Box>

// // // // // // // // // //         <Box className="tp-cards-grid">
// // // // // // // // // //           {activePlans.map((plan, index) => (
// // // // // // // // // //             <Card
// // // // // // // // // //               key={plan.id}
// // // // // // // // // //               className="tp-card"
// // // // // // // // // //               sx={{
// // // // // // // // // //                 backgroundImage: `${cardBgByIndex[index]}, url(${cardTexture})`,
// // // // // // // // // //               }}
// // // // // // // // // //             >
// // // // // // // // // //               <CardContent className="tp-card-content">
// // // // // // // // // //                 <Box className="tp-top-price-row">
// // // // // // // // // //                   <Typography className="tp-main-price">
// // // // // // // // // //                     {plan.price}
// // // // // // // // // //                   </Typography>

// // // // // // // // // //                   <Typography className="tp-gst">
// // // // // // // // // //                     +Gst
// // // // // // // // // //                   </Typography>
// // // // // // // // // //                 </Box>

// // // // // // // // // //                 <Typography className="tp-old-price">
// // // // // // // // // //                   {plan.oldPrice}
// // // // // // // // // //                 </Typography>

// // // // // // // // // //                 {/* ✅ DIFFERENT DUMBBELL IMAGE */}
// // // // // // // // // //                 <Box className="tp-dumbbell-row">
// // // // // // // // // //                   <img
// // // // // // // // // //                     src={dumbbellImages[index]}
// // // // // // // // // //                     alt="Dumbbell"
// // // // // // // // // //                     className="tp-dumbbell-image"
// // // // // // // // // //                   />
// // // // // // // // // //                 </Box>

// // // // // // // // // //                 <Typography className="tp-per-label">
// // // // // // // // // //                   {plan.perLabel}
// // // // // // // // // //                 </Typography>

// // // // // // // // // //                 <Box className="tp-features-list">
// // // // // // // // // //                   {plan.features.map((feature) => (
// // // // // // // // // //                     <Box
// // // // // // // // // //                       className="tp-feature-item"
// // // // // // // // // //                       key={feature}
// // // // // // // // // //                     >
// // // // // // // // // //                       <span className="tp-feature-bullet">
// // // // // // // // // //                         ◉
// // // // // // // // // //                       </span>

// // // // // // // // // //                       <span>{feature}</span>
// // // // // // // // // //                     </Box>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </Box>

// // // // // // // // // //                 <Button
// // // // // // // // // //                   className="tp-apply-btn"
// // // // // // // // // //                   onClick={() =>
// // // // // // // // // //                     handleApplyNow(plan)
// // // // // // // // // //                   }
// // // // // // // // // //                 >
// // // // // // // // // //                   Apply Now
// // // // // // // // // //                 </Button>

// // // // // // // // // //                 {/* ✅ DIFFERENT BODY IMAGE */}
// // // // // // // // // //                 <img
// // // // // // // // // //                   src={humanBodyImages[index]}
// // // // // // // // // //                   alt="Human Body"
// // // // // // // // // //                   className="tp-human-body"
// // // // // // // // // //                 />
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>
// // // // // // // // // //           ))}
// // // // // // // // // //         </Box>
// // // // // // // // // //       </Box>

// // // // // // // // // //       {/* FORM DIALOG */}

// // // // // // // // // //       <Dialog
// // // // // // // // // //         open={openForm}
// // // // // // // // // //         onClose={() => setOpenForm(false)}
// // // // // // // // // //         fullWidth
// // // // // // // // // //         maxWidth="sm"
// // // // // // // // // //       >
// // // // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // // // //           <DialogTitle>
// // // // // // // // // //             Apply for Plan
// // // // // // // // // //           </DialogTitle>

// // // // // // // // // //           <DialogContent>
// // // // // // // // // //             <TextField
// // // // // // // // // //               fullWidth
// // // // // // // // // //               margin="normal"
// // // // // // // // // //               label="Full Name"
// // // // // // // // // //               value={formData.name}
// // // // // // // // // //               onChange={handleFieldChange("name")}
// // // // // // // // // //             />

// // // // // // // // // //             <TextField
// // // // // // // // // //               fullWidth
// // // // // // // // // //               margin="normal"
// // // // // // // // // //               label="Phone Number"
// // // // // // // // // //               value={formData.phone}
// // // // // // // // // //               onChange={handleFieldChange("phone")}
// // // // // // // // // //             />

// // // // // // // // // //             <TextField
// // // // // // // // // //               fullWidth
// // // // // // // // // //               margin="normal"
// // // // // // // // // //               label="Email Address"
// // // // // // // // // //               value={formData.email}
// // // // // // // // // //               onChange={handleFieldChange("email")}
// // // // // // // // // //             />

// // // // // // // // // //             <TextField
// // // // // // // // // //               fullWidth
// // // // // // // // // //               margin="normal"
// // // // // // // // // //               label="Plan"
// // // // // // // // // //               value={formData.plan}
// // // // // // // // // //               InputProps={{
// // // // // // // // // //                 readOnly: true,
// // // // // // // // // //               }}
// // // // // // // // // //             />

// // // // // // // // // //             <TextField
// // // // // // // // // //               fullWidth
// // // // // // // // // //               margin="normal"
// // // // // // // // // //               label="Months"
// // // // // // // // // //               value={formData.months}
// // // // // // // // // //               InputProps={{
// // // // // // // // // //                 readOnly: true,
// // // // // // // // // //               }}
// // // // // // // // // //             />
// // // // // // // // // //           </DialogContent>

// // // // // // // // // //           <DialogActions>
// // // // // // // // // //             <Button
// // // // // // // // // //               onClick={() =>
// // // // // // // // // //                 setOpenForm(false)
// // // // // // // // // //               }
// // // // // // // // // //             >
// // // // // // // // // //               Cancel
// // // // // // // // // //             </Button>

// // // // // // // // // //             <Button
// // // // // // // // // //               type="submit"
// // // // // // // // // //               variant="contained"
// // // // // // // // // //             >
// // // // // // // // // //               Submit
// // // // // // // // // //             </Button>
// // // // // // // // // //           </DialogActions>
// // // // // // // // // //         </form>
// // // // // // // // // //       </Dialog>
// // // // // // // // // //     </Box>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // import React, { useMemo, useState } from "react";
// // // // // // // // // import {
// // // // // // // // //   Box,
// // // // // // // // //   Button,
// // // // // // // // //   Card,
// // // // // // // // //   CardContent,
// // // // // // // // //   Dialog,
// // // // // // // // //   DialogActions,
// // // // // // // // //   DialogContent,
// // // // // // // // //   DialogTitle,
// // // // // // // // //   Tab,
// // // // // // // // //   Tabs,
// // // // // // // // //   TextField,
// // // // // // // // //   Typography,
// // // // // // // // // } from "@mui/material";

// // // // // // // // // import "./TransformationPlans.css";

// // // // // // // // // const sectionBg = "https://venketfitness.com/plans-images/vf-bg.webp";
// // // // // // // // // const cardTexture = "https://venketfitness.com/plans-images/Group.webp";
// // // // // // // // // const brushBg = "https://venketfitness.com/plans-images/vf-brush-01.png";
// // // // // // // // // const featureIcon = "https://venketfitness.com/plans-images/ICON-01.png";

// // // // // // // // // const dumbbellImages = [
// // // // // // // // //   "https://venketfitness.com/plans-images/barbell-01.png",
// // // // // // // // //   "https://venketfitness.com/plans-images/barbell-02.png",
// // // // // // // // //   "https://venketfitness.com/plans-images/barbell-03.png",
// // // // // // // // //   "https://venketfitness.com/plans-images/barbell-04.png",
// // // // // // // // // ];

// // // // // // // // // const humanBodyImages = [
// // // // // // // // //   "https://venketfitness.com/plans-images/1st-body.png",
// // // // // // // // //   "https://venketfitness.com/plans-images/2nd-body.png",
// // // // // // // // //   "https://venketfitness.com/plans-images/3rd-body.png",
// // // // // // // // //   "https://venketfitness.com/plans-images/4th-body.png",
// // // // // // // // // ];

// // // // // // // // // const personalTrainingPlans = [
// // // // // // // // //   {
// // // // // // // // //     id: 1,
// // // // // // // // //     price: "₹25,000",
// // // // // // // // //     oldPrice: "₹30,000",
// // // // // // // // //     months: "1 Month",
// // // // // // // // //     perLabel: "Per 1 Month",
// // // // // // // // //     features: [
// // // // // // // // //       "1-on-1 personal training",
// // // // // // // // //       "5 sessions per week",
// // // // // // // // //       "Certified trainers",
// // // // // // // // //       "Workout plan",
// // // // // // // // //       "Basic diet guidance",
// // // // // // // // //       "Weekly progress tracking",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 2,
// // // // // // // // //     price: "₹70,000",
// // // // // // // // //     oldPrice: "₹84,000",
// // // // // // // // //     months: "3 Months",
// // // // // // // // //     perLabel: "Per 3 Months",
// // // // // // // // //     features: [
// // // // // // // // //       "1-on-1 personal training",
// // // // // // // // //       "5 sessions per week",
// // // // // // // // //       "Certified trainers",
// // // // // // // // //       "Workout plan",
// // // // // // // // //       "Basic diet guidance",
// // // // // // // // //       "Weekly progress tracking",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 3,
// // // // // // // // //     price: "₹1,30,000",
// // // // // // // // //     oldPrice: "₹1,56,000",
// // // // // // // // //     months: "6 Months",
// // // // // // // // //     perLabel: "Per 6 Months",
// // // // // // // // //     features: [
// // // // // // // // //       "1-on-1 personal training",
// // // // // // // // //       "5 sessions per week",
// // // // // // // // //       "Certified trainers",
// // // // // // // // //       "Workout plan",
// // // // // // // // //       "Basic diet guidance",
// // // // // // // // //       "Weekly progress tracking",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 4,
// // // // // // // // //     price: "₹2,50,000",
// // // // // // // // //     oldPrice: "₹2,88,000",
// // // // // // // // //     months: "12 Months",
// // // // // // // // //     perLabel: "Per 12 Months",
// // // // // // // // //     features: [
// // // // // // // // //       "1-on-1 personal training",
// // // // // // // // //       "5 sessions per week",
// // // // // // // // //       "Certified trainers",
// // // // // // // // //       "Workout plan",
// // // // // // // // //       "Basic diet guidance",
// // // // // // // // //       "Weekly progress tracking",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // const premiumCustomizedPlans = [
// // // // // // // // //   {
// // // // // // // // //     id: 5,
// // // // // // // // //     price: "₹40,000",
// // // // // // // // //     oldPrice: "₹48,000",
// // // // // // // // //     months: "1 Month",
// // // // // // // // //     perLabel: "Per 1 Month",
// // // // // // // // //     features: [
// // // // // // // // //       "Customized training",
// // // // // // // // //       "5 sessions per week",
// // // // // // // // //       "Premium trainers",
// // // // // // // // //       "Workout plan",
// // // // // // // // //       "Advanced diet guidance",
// // // // // // // // //       "Weekly progress tracking",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 6,
// // // // // // // // //     price: "₹1,05,000",
// // // // // // // // //     oldPrice: "₹1,26,000",
// // // // // // // // //     months: "3 Months",
// // // // // // // // //     perLabel: "Per 3 Months",
// // // // // // // // //     features: [
// // // // // // // // //       "Customized training",
// // // // // // // // //       "5 sessions per week",
// // // // // // // // //       "Premium trainers",
// // // // // // // // //       "Workout plan",
// // // // // // // // //       "Advanced diet guidance",
// // // // // // // // //       "Weekly progress tracking",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 7,
// // // // // // // // //     price: "₹1,95,000",
// // // // // // // // //     oldPrice: "₹2,34,000",
// // // // // // // // //     months: "6 Months",
// // // // // // // // //     perLabel: "Per 6 Months",
// // // // // // // // //     features: [
// // // // // // // // //       "Customized training",
// // // // // // // // //       "5 sessions per week",
// // // // // // // // //       "Premium trainers",
// // // // // // // // //       "Workout plan",
// // // // // // // // //       "Advanced diet guidance",
// // // // // // // // //       "Weekly progress tracking",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 8,
// // // // // // // // //     price: "₹3,60,000",
// // // // // // // // //     oldPrice: "₹4,20,000",
// // // // // // // // //     months: "12 Months",
// // // // // // // // //     perLabel: "Per 12 Months",
// // // // // // // // //     features: [
// // // // // // // // //       "Customized training",
// // // // // // // // //       "5 sessions per week",
// // // // // // // // //       "Premium trainers",
// // // // // // // // //       "Workout plan",
// // // // // // // // //       "Advanced diet guidance",
// // // // // // // // //       "Weekly progress tracking",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // const cardBgByIndex = [
// // // // // // // // //   "linear-gradient(180deg, rgba(25, 171, 188, 0.94) 0%, rgba(10, 116, 131, 0.96) 100%)",
// // // // // // // // //   "linear-gradient(180deg, rgba(10, 121, 138, 0.95) 0%, rgba(4, 92, 104, 0.97) 100%)",
// // // // // // // // //   "linear-gradient(180deg, rgba(25, 171, 188, 0.94) 0%, rgba(10, 116, 131, 0.96) 100%)",
// // // // // // // // //   "linear-gradient(180deg, rgba(10, 121, 138, 0.95) 0%, rgba(4, 92, 104, 0.97) 100%)",
// // // // // // // // // ];

// // // // // // // // // export default function TransformationPlans() {
// // // // // // // // //   const [tabValue, setTabValue] = useState(0);
// // // // // // // // //   const [openForm, setOpenForm] = useState(false);

// // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // //     name: "",
// // // // // // // // //     phone: "",
// // // // // // // // //     email: "",
// // // // // // // // //     plan: "",
// // // // // // // // //     months: "",
// // // // // // // // //   });

// // // // // // // // //   const activePlans = useMemo(() => {
// // // // // // // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // // // // // // //   }, [tabValue]);

// // // // // // // // //   const activePlanName =
// // // // // // // // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // // // // // // //   const handleApplyNow = (plan) => {
// // // // // // // // //     setFormData((prev) => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       plan: activePlanName,
// // // // // // // // //       months: plan.months,
// // // // // // // // //     }));
// // // // // // // // //     setOpenForm(true);
// // // // // // // // //   };

// // // // // // // // //   const handleFieldChange = (field) => (event) => {
// // // // // // // // //     setFormData((prev) => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [field]: event.target.value,
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = (event) => {
// // // // // // // // //     event.preventDefault();
// // // // // // // // //     console.log("Form submitted:", formData);
// // // // // // // // //     setOpenForm(false);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <Box
// // // // // // // // //       className="tp-section"
// // // // // // // // //       sx={{
// // // // // // // // //         backgroundImage: `linear-gradient(rgba(7, 0, 56, 0.90), rgba(7, 0, 56, 0.96)), url(${sectionBg})`,
// // // // // // // // //       }}
// // // // // // // // //     >
// // // // // // // // //       <Box className="tp-container">
// // // // // // // // //         <Typography className="tp-title">
// // // // // // // // //           Choose Your Transformation Plan
// // // // // // // // //         </Typography>

// // // // // // // // //         <Typography className="tp-subtitle">
// // // // // // // // //           This is not a gym. This is a transformation system
// // // // // // // // //         </Typography>

// // // // // // // // //         <Box className="tp-tabs-wrapper">
// // // // // // // // //           <Tabs
// // // // // // // // //             value={tabValue}
// // // // // // // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // // // // // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // // // // // // //             className="tp-tabs"
// // // // // // // // //           >
// // // // // // // // //             <Tab label="Personal Training" className="tp-tab" />
// // // // // // // // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // // // // // // // //           </Tabs>
// // // // // // // // //         </Box>

// // // // // // // // //         <Box className="tp-offer-brush-img">
// // // // // // // // //           <img src={brushBg} alt="Offer Brush" className="tp-brush-bg" />
// // // // // // // // //           <Box className="tp-brush-text">
// // // // // // // // //             <Typography className="tp-offer-small">
// // // // // // // // //               20% off on Personal Training Packages on the Occasion of
// // // // // // // // //             </Typography>
// // // // // // // // //             <Typography className="tp-offer-big">
// // // // // // // // //               4TH GYM ANNIVERSARY
// // // // // // // // //             </Typography>
// // // // // // // // //           </Box>
// // // // // // // // //         </Box>

// // // // // // // // //         <Box className="tp-cards-grid">
// // // // // // // // //           {activePlans.map((plan, index) => (
// // // // // // // // //             <Card
// // // // // // // // //               key={plan.id}
// // // // // // // // //               className={`tp-card ${
// // // // // // // // //                 index === 0 ? "tp-card-first" : ""
// // // // // // // // //               } ${index === activePlans.length - 1 ? "tp-card-last" : ""}`}
// // // // // // // // //               sx={{
// // // // // // // // //                 backgroundImage: `${cardBgByIndex[index]}, url(${cardTexture})`,
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               <CardContent className="tp-card-content">
// // // // // // // // //                 <Box className="tp-top-price-row">
// // // // // // // // //                   <Typography className="tp-main-price">{plan.price}</Typography>
// // // // // // // // //                   <Typography className="tp-gst">+Gst</Typography>
// // // // // // // // //                 </Box>

// // // // // // // // //                 <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// // // // // // // // //                 <Box className="tp-dumbbell-row">
// // // // // // // // //                   <img
// // // // // // // // //                     src={dumbbellImages[index]}
// // // // // // // // //                     alt="Dumbbell"
// // // // // // // // //                     className="tp-dumbbell-image"
// // // // // // // // //                   />
// // // // // // // // //                 </Box>

// // // // // // // // //                 <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // // // // // // // //                 <Box className="tp-features-list">
// // // // // // // // //                   {plan.features.map((feature) => (
// // // // // // // // //                     <Box className="tp-feature-item" key={feature}>
// // // // // // // // //                       <img
// // // // // // // // //                         src={featureIcon}
// // // // // // // // //                         alt="feature icon"
// // // // // // // // //                         className="tp-feature-icon"
// // // // // // // // //                       />
// // // // // // // // //                       <span>{feature}</span>
// // // // // // // // //                     </Box>
// // // // // // // // //                   ))}
// // // // // // // // //                 </Box>

// // // // // // // // //                 <Button
// // // // // // // // //                   className="tp-apply-btn"
// // // // // // // // //                   onClick={() => handleApplyNow(plan)}
// // // // // // // // //                 >
// // // // // // // // //                   Apply Now
// // // // // // // // //                 </Button>

// // // // // // // // //                 <img
// // // // // // // // //                   src={humanBodyImages[index]}
// // // // // // // // //                   alt="Human Body"
// // // // // // // // //                   className="tp-human-body"
// // // // // // // // //                 />
// // // // // // // // //               </CardContent>
// // // // // // // // //             </Card>
// // // // // // // // //           ))}
// // // // // // // // //         </Box>
// // // // // // // // //       </Box>

// // // // // // // // //       <Dialog
// // // // // // // // //         open={openForm}
// // // // // // // // //         onClose={() => setOpenForm(false)}
// // // // // // // // //         fullWidth
// // // // // // // // //         maxWidth="sm"
// // // // // // // // //         PaperProps={{
// // // // // // // // //           className: "tp-dialog-paper",
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // // //           <DialogTitle className="tp-dialog-title">Apply for Plan</DialogTitle>

// // // // // // // // //           <DialogContent>
// // // // // // // // //             <TextField
// // // // // // // // //               fullWidth
// // // // // // // // //               margin="normal"
// // // // // // // // //               label="Full Name"
// // // // // // // // //               value={formData.name}
// // // // // // // // //               onChange={handleFieldChange("name")}
// // // // // // // // //             />

// // // // // // // // //             <TextField
// // // // // // // // //               fullWidth
// // // // // // // // //               margin="normal"
// // // // // // // // //               label="Phone Number"
// // // // // // // // //               value={formData.phone}
// // // // // // // // //               onChange={handleFieldChange("phone")}
// // // // // // // // //             />

// // // // // // // // //             <TextField
// // // // // // // // //               fullWidth
// // // // // // // // //               margin="normal"
// // // // // // // // //               label="Email Address"
// // // // // // // // //               value={formData.email}
// // // // // // // // //               onChange={handleFieldChange("email")}
// // // // // // // // //             />

// // // // // // // // //             <TextField
// // // // // // // // //               fullWidth
// // // // // // // // //               margin="normal"
// // // // // // // // //               label="Plan"
// // // // // // // // //               value={formData.plan}
// // // // // // // // //               InputProps={{ readOnly: true }}
// // // // // // // // //             />

// // // // // // // // //             <TextField
// // // // // // // // //               fullWidth
// // // // // // // // //               margin="normal"
// // // // // // // // //               label="Months"
// // // // // // // // //               value={formData.months}
// // // // // // // // //               InputProps={{ readOnly: true }}
// // // // // // // // //             />
// // // // // // // // //           </DialogContent>

// // // // // // // // //           <DialogActions sx={{ padding: "0 24px 24px" }}>
// // // // // // // // //             <Button onClick={() => setOpenForm(false)}>Cancel</Button>
// // // // // // // // //             <Button type="submit" variant="contained">
// // // // // // // // //               Submit
// // // // // // // // //             </Button>
// // // // // // // // //           </DialogActions>
// // // // // // // // //         </form>
// // // // // // // // //       </Dialog>
// // // // // // // // //     </Box>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import React, { useMemo, useState } from "react";
// // // // // // // // import {
// // // // // // // //   Box,
// // // // // // // //   Button,
// // // // // // // //   Card,
// // // // // // // //   CardContent,
// // // // // // // //   Dialog,
// // // // // // // //   DialogActions,
// // // // // // // //   DialogContent,
// // // // // // // //   DialogTitle,
// // // // // // // //   Tab,
// // // // // // // //   Tabs,
// // // // // // // //   TextField,
// // // // // // // //   Typography,
// // // // // // // // } from "@mui/material";

// // // // // // // // import "./TransformationPlans.css";

// // // // // // // // const sectionBg = "https://venketfitness.com/plans-images/vf-bg.webp";
// // // // // // // // const cardTexture = "https://venketfitness.com/plans-images/Group.png";
// // // // // // // // const brushBg = "https://venketfitness.com/plans-images/vf-brush-01.png";
// // // // // // // // const featureIcon = "https://venketfitness.com/plans-images/ICON-01.png";

// // // // // // // // const dumbbellImages = [
// // // // // // // //   "https://venketfitness.com/plans-images/barbell-01.png",
// // // // // // // //   "https://venketfitness.com/plans-images/barbell-02.png",
// // // // // // // //   "https://venketfitness.com/plans-images/barbell-03.png",
// // // // // // // //   "https://venketfitness.com/plans-images/barbell-04.png",
// // // // // // // // ];

// // // // // // // // const humanBodyImages = [
// // // // // // // //   "https://venketfitness.com/plans-images/1st-body.png",
// // // // // // // //   "https://venketfitness.com/plans-images/2nd-body.png",
// // // // // // // //   "https://venketfitness.com/plans-images/3rd-body.png",
// // // // // // // //   "https://venketfitness.com/plans-images/4th-body.png",
// // // // // // // // ];

// // // // // // // // const personalTrainingPlans = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     price: "₹25,000",
// // // // // // // //     oldPrice: "₹30,000",
// // // // // // // //     months: "1 Month",
// // // // // // // //     perLabel: "Per 1 Month",
// // // // // // // //     features: [
// // // // // // // //       "1-on-1 personal training",
// // // // // // // //       "5 sessions per week",
// // // // // // // //       "Certified trainers",
// // // // // // // //       "Workout plan",
// // // // // // // //       "Basic diet guidance",
// // // // // // // //       "Weekly progress tracking",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     price: "₹70,000",
// // // // // // // //     oldPrice: "₹84,000",
// // // // // // // //     months: "3 Months",
// // // // // // // //     perLabel: "Per 3 Months",
// // // // // // // //     features: [
// // // // // // // //       "1-on-1 personal training",
// // // // // // // //       "5 sessions per week",
// // // // // // // //       "Certified trainers",
// // // // // // // //       "Workout plan",
// // // // // // // //       "Basic diet guidance",
// // // // // // // //       "Weekly progress tracking",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     price: "₹1,30,000",
// // // // // // // //     oldPrice: "₹1,56,000",
// // // // // // // //     months: "6 Months",
// // // // // // // //     perLabel: "Per 6 Months",
// // // // // // // //     features: [
// // // // // // // //       "1-on-1 personal training",
// // // // // // // //       "5 sessions per week",
// // // // // // // //       "Certified trainers",
// // // // // // // //       "Workout plan",
// // // // // // // //       "Basic diet guidance",
// // // // // // // //       "Weekly progress tracking",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 4,
// // // // // // // //     price: "₹2,50,000",
// // // // // // // //     oldPrice: "₹2,88,000",
// // // // // // // //     months: "12 Months",
// // // // // // // //     perLabel: "Per 12 Months",
// // // // // // // //     features: [
// // // // // // // //       "1-on-1 personal training",
// // // // // // // //       "5 sessions per week",
// // // // // // // //       "Certified trainers",
// // // // // // // //       "Workout plan",
// // // // // // // //       "Basic diet guidance",
// // // // // // // //       "Weekly progress tracking",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const premiumCustomizedPlans = [
// // // // // // // //   {
// // // // // // // //     id: 5,
// // // // // // // //     price: "₹40,000",
// // // // // // // //     oldPrice: "₹48,000",
// // // // // // // //     months: "1 Month",
// // // // // // // //     perLabel: "Per 1 Month",
// // // // // // // //     features: [
// // // // // // // //       "Customized training",
// // // // // // // //       "5 sessions per week",
// // // // // // // //       "Premium trainers",
// // // // // // // //       "Workout plan",
// // // // // // // //       "Advanced diet guidance",
// // // // // // // //       "Weekly progress tracking",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 6,
// // // // // // // //     price: "₹1,05,000",
// // // // // // // //     oldPrice: "₹1,26,000",
// // // // // // // //     months: "3 Months",
// // // // // // // //     perLabel: "Per 3 Months",
// // // // // // // //     features: [
// // // // // // // //       "Customized training",
// // // // // // // //       "5 sessions per week",
// // // // // // // //       "Premium trainers",
// // // // // // // //       "Workout plan",
// // // // // // // //       "Advanced diet guidance",
// // // // // // // //       "Weekly progress tracking",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 7,
// // // // // // // //     price: "₹1,95,000",
// // // // // // // //     oldPrice: "₹2,34,000",
// // // // // // // //     months: "6 Months",
// // // // // // // //     perLabel: "Per 6 Months",
// // // // // // // //     features: [
// // // // // // // //       "Customized training",
// // // // // // // //       "5 sessions per week",
// // // // // // // //       "Premium trainers",
// // // // // // // //       "Workout plan",
// // // // // // // //       "Advanced diet guidance",
// // // // // // // //       "Weekly progress tracking",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 8,
// // // // // // // //     price: "₹3,60,000",
// // // // // // // //     oldPrice: "₹4,20,000",
// // // // // // // //     months: "12 Months",
// // // // // // // //     perLabel: "Per 12 Months",
// // // // // // // //     features: [
// // // // // // // //       "Customized training",
// // // // // // // //       "5 sessions per week",
// // // // // // // //       "Premium trainers",
// // // // // // // //       "Workout plan",
// // // // // // // //       "Advanced diet guidance",
// // // // // // // //       "Weekly progress tracking",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const cardBgByIndex = [
// // // // // // // //   "linear-gradient(180deg, rgba(0, 89, 103, 0.96) 0%, rgba(0, 89, 103, 0.96) 100%)",
// // // // // // // //   "linear-gradient(180deg, rgba(0, 66, 76, 0.97) 0%, rgba(0, 66, 76, 0.97) 100%)",
// // // // // // // //   "linear-gradient(180deg, rgba(0, 89, 103, 0.96) 0%, rgba(0, 89, 103, 0.96) 100%)",
// // // // // // // //   "linear-gradient(180deg, rgba(0, 66, 76, 0.97) 0%, rgba(0, 66, 76, 0.97) 100%)",
// // // // // // // // ];

// // // // // // // // export default function TransformationPlans() {
// // // // // // // //   const [tabValue, setTabValue] = useState(0);
// // // // // // // //   const [openForm, setOpenForm] = useState(false);

// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     name: "",
// // // // // // // //     phone: "",
// // // // // // // //     email: "",
// // // // // // // //     plan: "",
// // // // // // // //     months: "",
// // // // // // // //   });

// // // // // // // //   const activePlans = useMemo(() => {
// // // // // // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // // // // // //   }, [tabValue]);

// // // // // // // //   const activePlanName =
// // // // // // // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // // // // // //   const handleApplyNow = (plan) => {
// // // // // // // //     setFormData((prev) => ({
// // // // // // // //       ...prev,
// // // // // // // //       plan: activePlanName,
// // // // // // // //       months: plan.months,
// // // // // // // //     }));
// // // // // // // //     setOpenForm(true);
// // // // // // // //   };

// // // // // // // //   const handleFieldChange = (field) => (event) => {
// // // // // // // //     setFormData((prev) => ({
// // // // // // // //       ...prev,
// // // // // // // //       [field]: event.target.value,
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const handleSubmit = (event) => {
// // // // // // // //     event.preventDefault();
// // // // // // // //     console.log("Form submitted:", formData);
// // // // // // // //     setOpenForm(false);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <Box
// // // // // // // //       className="tp-section"
// // // // // // // //       sx={{
// // // // // // // //         backgroundImage: `linear-gradient(rgba(7, 0, 56, 0.90), rgba(7, 0, 56, 0.97)), url(${sectionBg})`,
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       <Box className="tp-container">
// // // // // // // //         <Typography className="tp-title">
// // // // // // // //           Choose Your Transformation Plan
// // // // // // // //         </Typography>

// // // // // // // //         <Typography className="tp-subtitle">
// // // // // // // //           This is not a gym. This is a transformation system
// // // // // // // //         </Typography>

// // // // // // // //         <Box className="tp-tabs-wrapper">
// // // // // // // //           <Tabs
// // // // // // // //             value={tabValue}
// // // // // // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // // // // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // // // // // //             className="tp-tabs"
// // // // // // // //           >
// // // // // // // //             <Tab label="Personal Training" className="tp-tab" />
// // // // // // // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // // // // // // //           </Tabs>
// // // // // // // //         </Box>

// // // // // // // //         <Box className="tp-offer-brush-img">
// // // // // // // //           <img src={brushBg} alt="Offer Brush" className="tp-brush-bg" />
// // // // // // // //           <Box className="tp-brush-text">
// // // // // // // //             <Typography className="tp-offer-small">
// // // // // // // //               20% off on Personal Training Packages on the Occasion of
// // // // // // // //             </Typography>
// // // // // // // //             <Typography className="tp-offer-big">
// // // // // // // //               4TH GYM ANNIVERSARY
// // // // // // // //             </Typography>
// // // // // // // //           </Box>
// // // // // // // //         </Box>

// // // // // // // //         <Box className="tp-cards-grid">
// // // // // // // //           {activePlans.map((plan, index) => (
// // // // // // // //             <Card
// // // // // // // //               key={plan.id}
// // // // // // // //               className={`tp-card ${
// // // // // // // //                 index === 0 ? "tp-card-first" : ""
// // // // // // // //               } ${index === activePlans.length - 1 ? "tp-card-last" : ""}`}
// // // // // // // //               sx={{
// // // // // // // //                 backgroundImage: `${cardBgByIndex[index]}, url(${cardTexture})`,
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               <CardContent className="tp-card-content">
// // // // // // // //                 <Box className="tp-top-price-row">
// // // // // // // //                   <Typography className="tp-main-price">{plan.price}</Typography>
// // // // // // // //                   <Typography className="tp-gst">+Gst</Typography>
// // // // // // // //                 </Box>

// // // // // // // //                 <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// // // // // // // //                 <Box className="tp-dumbbell-row">
// // // // // // // //                   <img
// // // // // // // //                     src={dumbbellImages[index]}
// // // // // // // //                     alt="Dumbbell"
// // // // // // // //                     className="tp-dumbbell-image"
// // // // // // // //                   />
// // // // // // // //                 </Box>

// // // // // // // //                 <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // // // // // // //                 <Box className="tp-features-list">
// // // // // // // //                   {plan.features.map((feature) => (
// // // // // // // //                     <Box className="tp-feature-item" key={feature}>
// // // // // // // //                       <img
// // // // // // // //                         src={featureIcon}
// // // // // // // //                         alt="feature icon"
// // // // // // // //                         className="tp-feature-icon"
// // // // // // // //                       />
// // // // // // // //                       <span>{feature}</span>
// // // // // // // //                     </Box>
// // // // // // // //                   ))}
// // // // // // // //                 </Box>

// // // // // // // //                 <Button
// // // // // // // //                   className="tp-apply-btn"
// // // // // // // //                   onClick={() => handleApplyNow(plan)}
// // // // // // // //                 >
// // // // // // // //                   Apply Now
// // // // // // // //                 </Button>

// // // // // // // //                 <img
// // // // // // // //                   src={humanBodyImages[index]}
// // // // // // // //                   alt="Human Body"
// // // // // // // //                   className="tp-human-body"
// // // // // // // //                 />
// // // // // // // //               </CardContent>
// // // // // // // //             </Card>
// // // // // // // //           ))}
// // // // // // // //         </Box>
// // // // // // // //       </Box>

// // // // // // // //       <Dialog
// // // // // // // //         open={openForm}
// // // // // // // //         onClose={() => setOpenForm(false)}
// // // // // // // //         fullWidth
// // // // // // // //         maxWidth="sm"
// // // // // // // //         PaperProps={{
// // // // // // // //           className: "tp-dialog-paper",
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // //           <DialogTitle className="tp-dialog-title">Apply for Plan</DialogTitle>

// // // // // // // //           <DialogContent>
// // // // // // // //             <TextField
// // // // // // // //               fullWidth
// // // // // // // //               margin="normal"
// // // // // // // //               label="Full Name"
// // // // // // // //               value={formData.name}
// // // // // // // //               onChange={handleFieldChange("name")}
// // // // // // // //             />

// // // // // // // //             <TextField
// // // // // // // //               fullWidth
// // // // // // // //               margin="normal"
// // // // // // // //               label="Phone Number"
// // // // // // // //               value={formData.phone}
// // // // // // // //               onChange={handleFieldChange("phone")}
// // // // // // // //             />

// // // // // // // //             <TextField
// // // // // // // //               fullWidth
// // // // // // // //               margin="normal"
// // // // // // // //               label="Email Address"
// // // // // // // //               value={formData.email}
// // // // // // // //               onChange={handleFieldChange("email")}
// // // // // // // //             />

// // // // // // // //             <TextField
// // // // // // // //               fullWidth
// // // // // // // //               margin="normal"
// // // // // // // //               label="Plan"
// // // // // // // //               value={formData.plan}
// // // // // // // //               InputProps={{ readOnly: true }}
// // // // // // // //             />

// // // // // // // //             <TextField
// // // // // // // //               fullWidth
// // // // // // // //               margin="normal"
// // // // // // // //               label="Months"
// // // // // // // //               value={formData.months}
// // // // // // // //               InputProps={{ readOnly: true }}
// // // // // // // //             />
// // // // // // // //           </DialogContent>

// // // // // // // //           <DialogActions sx={{ padding: "0 24px 24px" }}>
// // // // // // // //             <Button onClick={() => setOpenForm(false)}>Cancel</Button>
// // // // // // // //             <Button type="submit" variant="contained">
// // // // // // // //               Submit
// // // // // // // //             </Button>
// // // // // // // //           </DialogActions>
// // // // // // // //         </form>
// // // // // // // //       </Dialog>
// // // // // // // //     </Box>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import React, { useMemo, useState } from "react";
// // // // // // // import {
// // // // // // //   Box,
// // // // // // //   Button,
// // // // // // //   Card,
// // // // // // //   CardContent,
// // // // // // //   Dialog,
// // // // // // //   DialogActions,
// // // // // // //   DialogContent,
// // // // // // //   DialogTitle,
// // // // // // //   Tab,
// // // // // // //   Tabs,
// // // // // // //   TextField,
// // // // // // //   Typography,
// // // // // // // } from "@mui/material";

// // // // // // // import "./TransformationPlans.css";

// // // // // // // const sectionBg = "https://venketfitness.com/plans-images/vf-bg.webp";
// // // // // // // const cardTexture = "https://venketfitness.com/plans-images/Group.webp";
// // // // // // // const brushBg = "https://venketfitness.com/plans-images/vf-brush-01.png";
// // // // // // // const featureIcon = "https://venketfitness.com/plans-images/ICON-01.png";

// // // // // // // const dumbbellImages = [
// // // // // // //   "https://venketfitness.com/plans-images/barbell-01.png",
// // // // // // //   "https://venketfitness.com/plans-images/barbell-02.png",
// // // // // // //   "https://venketfitness.com/plans-images/barbell-03.png",
// // // // // // //   "https://venketfitness.com/plans-images/barbell-04.png",
// // // // // // // ];

// // // // // // // const humanBodyImages = [
// // // // // // //   "https://venketfitness.com/plans-images/1st-body.png",
// // // // // // //   "https://venketfitness.com/plans-images/2nd-body.png",
// // // // // // //   "https://venketfitness.com/plans-images/3rd-body.png",
// // // // // // //   "https://venketfitness.com/plans-images/4th-body.png",
// // // // // // // ];

// // // // // // // const personalTrainingPlans = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     price: "₹25,000",
// // // // // // //     oldPrice: "₹30,000",
// // // // // // //     months: "1 Month",
// // // // // // //     perLabel: "Per 1 Month",
// // // // // // //     features: [
// // // // // // //       "1-on-1 personal training",
// // // // // // //       "5 sessions per week",
// // // // // // //       "Certified trainers",
// // // // // // //       "Workout plan",
// // // // // // //       "Basic diet guidance",
// // // // // // //       "Weekly progress tracking",
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 2,
// // // // // // //     price: "₹70,000",
// // // // // // //     oldPrice: "₹84,000",
// // // // // // //     months: "3 Months",
// // // // // // //     perLabel: "Per 3 Months",
// // // // // // //     features: [
// // // // // // //       "1-on-1 personal training",
// // // // // // //       "5 sessions per week",
// // // // // // //       "Certified trainers",
// // // // // // //       "Workout plan",
// // // // // // //       "Basic diet guidance",
// // // // // // //       "Weekly progress tracking",
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 3,
// // // // // // //     price: "₹1,30,000",
// // // // // // //     oldPrice: "₹1,56,000",
// // // // // // //     months: "6 Months",
// // // // // // //     perLabel: "Per 6 Months",
// // // // // // //     features: [
// // // // // // //       "1-on-1 personal training",
// // // // // // //       "5 sessions per week",
// // // // // // //       "Certified trainers",
// // // // // // //       "Workout plan",
// // // // // // //       "Basic diet guidance",
// // // // // // //       "Weekly progress tracking",
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 4,
// // // // // // //     price: "₹2,50,000",
// // // // // // //     oldPrice: "₹2,88,000",
// // // // // // //     months: "12 Months",
// // // // // // //     perLabel: "Per 12 Months",
// // // // // // //     features: [
// // // // // // //       "1-on-1 personal training",
// // // // // // //       "5 sessions per week",
// // // // // // //       "Certified trainers",
// // // // // // //       "Workout plan",
// // // // // // //       "Basic diet guidance",
// // // // // // //       "Weekly progress tracking",
// // // // // // //     ],
// // // // // // //   },
// // // // // // // ];

// // // // // // // const premiumCustomizedPlans = [
// // // // // // //   {
// // // // // // //     id: 5,
// // // // // // //     price: "₹40,000",
// // // // // // //     oldPrice: "₹48,000",
// // // // // // //     months: "1 Month",
// // // // // // //     perLabel: "Per 1 Month",
// // // // // // //     features: [
// // // // // // //       "Customized training",
// // // // // // //       "5 sessions per week",
// // // // // // //       "Premium trainers",
// // // // // // //       "Workout plan",
// // // // // // //       "Advanced diet guidance",
// // // // // // //       "Weekly progress tracking",
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 6,
// // // // // // //     price: "₹1,05,000",
// // // // // // //     oldPrice: "₹1,26,000",
// // // // // // //     months: "3 Months",
// // // // // // //     perLabel: "Per 3 Months",
// // // // // // //     features: [
// // // // // // //       "Customized training",
// // // // // // //       "5 sessions per week",
// // // // // // //       "Premium trainers",
// // // // // // //       "Workout plan",
// // // // // // //       "Advanced diet guidance",
// // // // // // //       "Weekly progress tracking",
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 7,
// // // // // // //     price: "₹1,95,000",
// // // // // // //     oldPrice: "₹2,34,000",
// // // // // // //     months: "6 Months",
// // // // // // //     perLabel: "Per 6 Months",
// // // // // // //     features: [
// // // // // // //       "Customized training",
// // // // // // //       "5 sessions per week",
// // // // // // //       "Premium trainers",
// // // // // // //       "Workout plan",
// // // // // // //       "Advanced diet guidance",
// // // // // // //       "Weekly progress tracking",
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 8,
// // // // // // //     price: "₹3,60,000",
// // // // // // //     oldPrice: "₹4,20,000",
// // // // // // //     months: "12 Months",
// // // // // // //     perLabel: "Per 12 Months",
// // // // // // //     features: [
// // // // // // //       "Customized training",
// // // // // // //       "5 sessions per week",
// // // // // // //       "Premium trainers",
// // // // // // //       "Workout plan",
// // // // // // //       "Advanced diet guidance",
// // // // // // //       "Weekly progress tracking",
// // // // // // //     ],
// // // // // // //   },
// // // // // // // ];

// // // // // // // const cardBgByIndex = [
// // // // // // //   "linear-gradient(180deg, rgba(0, 89, 103, 0.72) 0%, rgba(0, 89, 103, 0.78) 100%)",
// // // // // // //   "linear-gradient(180deg, rgba(0, 66, 76, 0.72) 0%, rgba(0, 66, 76, 0.78) 100%)",
// // // // // // //   "linear-gradient(180deg, rgba(0, 89, 103, 0.72) 0%, rgba(0, 89, 103, 0.78) 100%)",
// // // // // // //   "linear-gradient(180deg, rgba(0, 66, 76, 0.72) 0%, rgba(0, 66, 76, 0.78) 100%)",
// // // // // // // ];

// // // // // // // export default function TransformationPlans() {
// // // // // // //   const [tabValue, setTabValue] = useState(0);
// // // // // // //   const [openForm, setOpenForm] = useState(false);

// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: "",
// // // // // // //     phone: "",
// // // // // // //     email: "",
// // // // // // //     plan: "",
// // // // // // //     months: "",
// // // // // // //   });

// // // // // // //   const activePlans = useMemo(() => {
// // // // // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // // // // //   }, [tabValue]);

// // // // // // //   const activePlanName =
// // // // // // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // // // // //   const handleApplyNow = (plan) => {
// // // // // // //     setFormData((prev) => ({
// // // // // // //       ...prev,
// // // // // // //       plan: activePlanName,
// // // // // // //       months: plan.months,
// // // // // // //     }));
// // // // // // //     setOpenForm(true);
// // // // // // //   };

// // // // // // //   const handleFieldChange = (field) => (event) => {
// // // // // // //     setFormData((prev) => ({
// // // // // // //       ...prev,
// // // // // // //       [field]: event.target.value,
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const handleSubmit = (event) => {
// // // // // // //     event.preventDefault();
// // // // // // //     console.log("Form submitted:", formData);
// // // // // // //     setOpenForm(false);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Box
// // // // // // //       className="tp-section"
// // // // // // //       sx={{
// // // // // // //         backgroundImage: `linear-gradient(rgba(7, 0, 56, 0.52), rgba(7, 0, 56, 0.66)), url(${sectionBg})`,
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       <Box className="tp-container">
// // // // // // //         <Typography className="tp-title">
// // // // // // //           Choose Your Transformation Plan
// // // // // // //         </Typography>

// // // // // // //         <Typography className="tp-subtitle">
// // // // // // //           This is not a gym. This is a transformation system
// // // // // // //         </Typography>

// // // // // // //         <Box className="tp-tabs-wrapper">
// // // // // // //           <Tabs
// // // // // // //             value={tabValue}
// // // // // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // // // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // // // // //             className="tp-tabs"
// // // // // // //           >
// // // // // // //             <Tab label="Personal Training" className="tp-tab" />
// // // // // // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // // // // // //           </Tabs>
// // // // // // //         </Box>

// // // // // // //         <Box className="tp-offer-brush-img">
// // // // // // //           <img src={brushBg} alt="Offer Brush" className="tp-brush-bg" />
// // // // // // //           <Box className="tp-brush-text">
// // // // // // //             <Typography className="tp-offer-small">
// // // // // // //               20% off on Personal Training Packages on the Occasion of
// // // // // // //             </Typography>
// // // // // // //             <Typography className="tp-offer-big">
// // // // // // //               4TH GYM ANNIVERSARY
// // // // // // //             </Typography>
// // // // // // //           </Box>
// // // // // // //         </Box>

// // // // // // //         <Box className="tp-cards-grid">
// // // // // // //           {activePlans.map((plan, index) => (
// // // // // // //             <Card
// // // // // // //               key={plan.id}
// // // // // // //               className={`tp-card ${
// // // // // // //                 index === 0 ? "tp-card-first" : ""
// // // // // // //               } ${index === activePlans.length - 1 ? "tp-card-last" : ""}`}
// // // // // // //               sx={{
// // // // // // //                 backgroundImage: `${cardBgByIndex[index]}, url(${cardTexture})`,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               <CardContent className="tp-card-content">
// // // // // // //                 <Box className="tp-top-price-row">
// // // // // // //                   <Typography className="tp-main-price">{plan.price}</Typography>
// // // // // // //                   <Typography className="tp-gst">+Gst</Typography>
// // // // // // //                 </Box>

// // // // // // //                 <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// // // // // // //                 <Box className="tp-dumbbell-row">
// // // // // // //                   <img
// // // // // // //                     src={dumbbellImages[index]}
// // // // // // //                     alt="Dumbbell"
// // // // // // //                     className="tp-dumbbell-image"
// // // // // // //                   />
// // // // // // //                 </Box>

// // // // // // //                 <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // // // // // //                 <Box className="tp-features-list">
// // // // // // //                   {plan.features.map((feature) => (
// // // // // // //                     <Box className="tp-feature-item" key={feature}>
// // // // // // //                       <img
// // // // // // //                         src={featureIcon}
// // // // // // //                         alt="feature icon"
// // // // // // //                         className="tp-feature-icon"
// // // // // // //                       />
// // // // // // //                       <span>{feature}</span>
// // // // // // //                     </Box>
// // // // // // //                   ))}
// // // // // // //                 </Box>

// // // // // // //                 <Button
// // // // // // //                   className="tp-apply-btn"
// // // // // // //                   onClick={() => handleApplyNow(plan)}
// // // // // // //                 >
// // // // // // //                   Apply Now
// // // // // // //                 </Button>

// // // // // // //                 <img
// // // // // // //                   src={humanBodyImages[index]}
// // // // // // //                   alt="Human Body"
// // // // // // //                   className="tp-human-body"
// // // // // // //                 />
// // // // // // //               </CardContent>
// // // // // // //             </Card>
// // // // // // //           ))}
// // // // // // //         </Box>
// // // // // // //       </Box>

// // // // // // //       <Dialog
// // // // // // //         open={openForm}
// // // // // // //         onClose={() => setOpenForm(false)}
// // // // // // //         fullWidth
// // // // // // //         maxWidth="sm"
// // // // // // //         PaperProps={{
// // // // // // //           className: "tp-dialog-paper",
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // //           <DialogTitle className="tp-dialog-title">Apply for Plan</DialogTitle>

// // // // // // //           <DialogContent>
// // // // // // //             <TextField
// // // // // // //               fullWidth
// // // // // // //               margin="normal"
// // // // // // //               label="Full Name"
// // // // // // //               value={formData.name}
// // // // // // //               onChange={handleFieldChange("name")}
// // // // // // //             />
// // // // // // //             <TextField
// // // // // // //               fullWidth
// // // // // // //               margin="normal"
// // // // // // //               label="Phone Number"
// // // // // // //               value={formData.phone}
// // // // // // //               onChange={handleFieldChange("phone")}
// // // // // // //             />
// // // // // // //             <TextField
// // // // // // //               fullWidth
// // // // // // //               margin="normal"
// // // // // // //               label="Email Address"
// // // // // // //               value={formData.email}
// // // // // // //               onChange={handleFieldChange("email")}
// // // // // // //             />
// // // // // // //             <TextField
// // // // // // //               fullWidth
// // // // // // //               margin="normal"
// // // // // // //               label="Plan"
// // // // // // //               value={formData.plan}
// // // // // // //               InputProps={{ readOnly: true }}
// // // // // // //             />
// // // // // // //             <TextField
// // // // // // //               fullWidth
// // // // // // //               margin="normal"
// // // // // // //               label="Months"
// // // // // // //               value={formData.months}
// // // // // // //               InputProps={{ readOnly: true }}
// // // // // // //             />
// // // // // // //           </DialogContent>

// // // // // // //           <DialogActions sx={{ padding: "0 24px 24px" }}>
// // // // // // //             <Button onClick={() => setOpenForm(false)}>Cancel</Button>
// // // // // // //             <Button type="submit" variant="contained">
// // // // // // //               Submit
// // // // // // //             </Button>
// // // // // // //           </DialogActions>
// // // // // // //         </form>
// // // // // // //       </Dialog>
// // // // // // //     </Box>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useMemo, useState } from "react";
// // // // // // import {
// // // // // //   Box,
// // // // // //   Button,
// // // // // //   Card,
// // // // // //   CardContent,
// // // // // //   Dialog,
// // // // // //   DialogActions,
// // // // // //   DialogContent,
// // // // // //   DialogTitle,
// // // // // //   Tab,
// // // // // //   Tabs,
// // // // // //   TextField,
// // // // // //   Typography,
// // // // // // } from "@mui/material";

// // // // // // import "./TransformationPlans.css";

// // // // // // const sectionBg = "https://venketfitness.com/plans-images/vf-bg.webp";
// // // // // // const cardTexture = "https://venketfitness.com/plans-images/Group.webp";
// // // // // // const brushBg = "https://venketfitness.com/plans-images/vf-brush-01.png";
// // // // // // const featureIcon = "https://venketfitness.com/plans-images/ICON-01.png";

// // // // // // const dumbbellImages = [
// // // // // //   "https://venketfitness.com/plans-images/barbell-01.png",
// // // // // //   "https://venketfitness.com/plans-images/barbell-02.png",
// // // // // //   "https://venketfitness.com/plans-images/barbell-03.png",
// // // // // //   "https://venketfitness.com/plans-images/barbell-04.png",
// // // // // // ];

// // // // // // const humanBodyImages = [
// // // // // //   "https://venketfitness.com/plans-images/1st-body.png",
// // // // // //   "https://venketfitness.com/plans-images/2nd-body.png",
// // // // // //   "https://venketfitness.com/plans-images/3rd-body.png",
// // // // // //   "https://venketfitness.com/plans-images/4th-body.png",
// // // // // // ];

// // // // // // const personalTrainingPlans = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     price: "₹25,000",
// // // // // //     oldPrice: "₹30,000",
// // // // // //     months: "1 Month",
// // // // // //     perLabel: "Per 1 Month",
// // // // // //     features: [
// // // // // //       "1-on-1 personal training",
// // // // // //       "5 sessions per week",
// // // // // //       "Certified trainers",
// // // // // //       "Workout plan",
// // // // // //       "Basic diet guidance",
// // // // // //       "Weekly progress tracking",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     price: "₹70,000",
// // // // // //     oldPrice: "₹84,000",
// // // // // //     months: "3 Months",
// // // // // //     perLabel: "Per 3 Months",
// // // // // //     features: [
// // // // // //       "1-on-1 personal training",
// // // // // //       "5 sessions per week",
// // // // // //       "Certified trainers",
// // // // // //       "Workout plan",
// // // // // //       "Basic diet guidance",
// // // // // //       "Weekly progress tracking",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3,
// // // // // //     price: "₹1,30,000",
// // // // // //     oldPrice: "₹1,56,000",
// // // // // //     months: "6 Months",
// // // // // //     perLabel: "Per 6 Months",
// // // // // //     features: [
// // // // // //       "1-on-1 personal training",
// // // // // //       "5 sessions per week",
// // // // // //       "Certified trainers",
// // // // // //       "Workout plan",
// // // // // //       "Basic diet guidance",
// // // // // //       "Weekly progress tracking",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 4,
// // // // // //     price: "₹2,50,000",
// // // // // //     oldPrice: "₹2,88,000",
// // // // // //     months: "12 Months",
// // // // // //     perLabel: "Per 12 Months",
// // // // // //     features: [
// // // // // //       "1-on-1 personal training",
// // // // // //       "5 sessions per week",
// // // // // //       "Certified trainers",
// // // // // //       "Workout plan",
// // // // // //       "Basic diet guidance",
// // // // // //       "Weekly progress tracking",
// // // // // //     ],
// // // // // //   },
// // // // // // ];

// // // // // // const premiumCustomizedPlans = [
// // // // // //   {
// // // // // //     id: 5,
// // // // // //     price: "₹40,000",
// // // // // //     oldPrice: "₹48,000",
// // // // // //     months: "1 Month",
// // // // // //     perLabel: "Per 1 Month",
// // // // // //     features: [
// // // // // //       "Customized training",
// // // // // //       "5 sessions per week",
// // // // // //       "Premium trainers",
// // // // // //       "Workout plan",
// // // // // //       "Advanced diet guidance",
// // // // // //       "Weekly progress tracking",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 6,
// // // // // //     price: "₹1,05,000",
// // // // // //     oldPrice: "₹1,26,000",
// // // // // //     months: "3 Months",
// // // // // //     perLabel: "Per 3 Months",
// // // // // //     features: [
// // // // // //       "Customized training",
// // // // // //       "5 sessions per week",
// // // // // //       "Premium trainers",
// // // // // //       "Workout plan",
// // // // // //       "Advanced diet guidance",
// // // // // //       "Weekly progress tracking",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 7,
// // // // // //     price: "₹1,95,000",
// // // // // //     oldPrice: "₹2,34,000",
// // // // // //     months: "6 Months",
// // // // // //     perLabel: "Per 6 Months",
// // // // // //     features: [
// // // // // //       "Customized training",
// // // // // //       "5 sessions per week",
// // // // // //       "Premium trainers",
// // // // // //       "Workout plan",
// // // // // //       "Advanced diet guidance",
// // // // // //       "Weekly progress tracking",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 8,
// // // // // //     price: "₹3,60,000",
// // // // // //     oldPrice: "₹4,20,000",
// // // // // //     months: "12 Months",
// // // // // //     perLabel: "Per 12 Months",
// // // // // //     features: [
// // // // // //       "Customized training",
// // // // // //       "5 sessions per week",
// // // // // //       "Premium trainers",
// // // // // //       "Workout plan",
// // // // // //       "Advanced diet guidance",
// // // // // //       "Weekly progress tracking",
// // // // // //     ],
// // // // // //   },
// // // // // // ];

// // // // // // const cardBgByIndex = ["#005967", "#00424C", "#005967", "#00424C"];

// // // // // // export default function TransformationPlans() {
// // // // // //   const [tabValue, setTabValue] = useState(0);
// // // // // //   const [openForm, setOpenForm] = useState(false);

// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     phone: "",
// // // // // //     email: "",
// // // // // //     plan: "",
// // // // // //     months: "",
// // // // // //   });

// // // // // //   const activePlans = useMemo(() => {
// // // // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // // // //   }, [tabValue]);

// // // // // //   const activePlanName =
// // // // // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // // // //   const handleApplyNow = (plan) => {
// // // // // //     setFormData((prev) => ({
// // // // // //       ...prev,
// // // // // //       plan: activePlanName,
// // // // // //       months: plan.months,
// // // // // //     }));
// // // // // //     setOpenForm(true);
// // // // // //   };

// // // // // //   const handleFieldChange = (field) => (event) => {
// // // // // //     setFormData((prev) => ({
// // // // // //       ...prev,
// // // // // //       [field]: event.target.value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = (event) => {
// // // // // //     event.preventDefault();
// // // // // //     console.log("Form submitted:", formData);
// // // // // //     setOpenForm(false);
// // // // // //   };

// // // // // //   return (
// // // // // //     <Box
// // // // // //       className="tp-section"
// // // // // //       sx={{
// // // // // //         backgroundImage: `linear-gradient(rgba(7, 0, 56, 0.42), rgba(7, 0, 56, 0.58)), url(${sectionBg})`,
// // // // // //       }}
// // // // // //     >
// // // // // //       <Box className="tp-container">
// // // // // //         <Typography className="tp-title">
// // // // // //           Choose Your Transformation Plan
// // // // // //         </Typography>

// // // // // //         <Typography className="tp-subtitle">
// // // // // //           This is not a gym. This is a transformation system
// // // // // //         </Typography>

// // // // // //         <Box className="tp-tabs-wrapper">
// // // // // //           <Tabs
// // // // // //             value={tabValue}
// // // // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // // // //             className="tp-tabs"
// // // // // //           >
// // // // // //             <Tab label="Personal Training" className="tp-tab" />
// // // // // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // // // // //           </Tabs>
// // // // // //         </Box>

// // // // // //         <Box className="tp-offer-brush-img">
// // // // // //           <img src={brushBg} alt="Offer Brush" className="tp-brush-bg" />
// // // // // //           <Box className="tp-brush-text">
// // // // // //             <Typography className="tp-offer-small">
// // // // // //               20% off on Personal Training Packages on the Occasion of
// // // // // //             </Typography>
// // // // // //             <Typography className="tp-offer-big">
// // // // // //               4TH GYM ANNIVERSARY
// // // // // //             </Typography>
// // // // // //           </Box>
// // // // // //         </Box>

// // // // // //         <Box className="tp-cards-grid">
// // // // // //           {activePlans.map((plan, index) => (
// // // // // //             <Card
// // // // // //               key={plan.id}
// // // // // //               className={`tp-card ${
// // // // // //                 index === 0 ? "tp-card-first" : ""
// // // // // //               } ${index === activePlans.length - 1 ? "tp-card-last" : ""}`}
// // // // // //               sx={{
// // // // // //                 backgroundColor: cardBgByIndex[index],
// // // // // //                 backgroundImage: `url(${cardTexture})`,
// // // // // //               }}
// // // // // //             >
// // // // // //               <CardContent className="tp-card-content">
// // // // // //                 <Box className="tp-top-price-row">
// // // // // //                   <Typography className="tp-main-price">{plan.price}</Typography>
// // // // // //                   <Typography className="tp-gst">+Gst</Typography>
// // // // // //                 </Box>

// // // // // //                 <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// // // // // //                 <Box className="tp-dumbbell-row">
// // // // // //                   <img
// // // // // //                     src={dumbbellImages[index]}
// // // // // //                     alt="Dumbbell"
// // // // // //                     className="tp-dumbbell-image"
// // // // // //                   />
// // // // // //                 </Box>

// // // // // //                 <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // // // // //                 <Box className="tp-features-list">
// // // // // //                   {plan.features.map((feature) => (
// // // // // //                     <Box className="tp-feature-item" key={feature}>
// // // // // //                       <img
// // // // // //                         src={featureIcon}
// // // // // //                         alt="feature icon"
// // // // // //                         className="tp-feature-icon"
// // // // // //                       />
// // // // // //                       <span>{feature}</span>
// // // // // //                     </Box>
// // // // // //                   ))}
// // // // // //                 </Box>

// // // // // //                 <Button
// // // // // //                   className="tp-apply-btn"
// // // // // //                   onClick={() => handleApplyNow(plan)}
// // // // // //                 >
// // // // // //                   Apply Now
// // // // // //                 </Button>

// // // // // //                 <img
// // // // // //                   src={humanBodyImages[index]}
// // // // // //                   alt="Human Body"
// // // // // //                   className="tp-human-body"
// // // // // //                 />
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           ))}
// // // // // //         </Box>
// // // // // //       </Box>

// // // // // //       <Dialog
// // // // // //         open={openForm}
// // // // // //         onClose={() => setOpenForm(false)}
// // // // // //         fullWidth
// // // // // //         maxWidth="sm"
// // // // // //         PaperProps={{
// // // // // //           className: "tp-dialog-paper",
// // // // // //         }}
// // // // // //       >
// // // // // //         <form onSubmit={handleSubmit}>
// // // // // //           <DialogTitle className="tp-dialog-title">Apply for Plan</DialogTitle>

// // // // // //           <DialogContent>
// // // // // //             <TextField
// // // // // //               fullWidth
// // // // // //               margin="normal"
// // // // // //               label="Full Name"
// // // // // //               value={formData.name}
// // // // // //               onChange={handleFieldChange("name")}
// // // // // //             />

// // // // // //             <TextField
// // // // // //               fullWidth
// // // // // //               margin="normal"
// // // // // //               label="Phone Number"
// // // // // //               value={formData.phone}
// // // // // //               onChange={handleFieldChange("phone")}
// // // // // //             />

// // // // // //             <TextField
// // // // // //               fullWidth
// // // // // //               margin="normal"
// // // // // //               label="Email Address"
// // // // // //               value={formData.email}
// // // // // //               onChange={handleFieldChange("email")}
// // // // // //             />

// // // // // //             <TextField
// // // // // //               fullWidth
// // // // // //               margin="normal"
// // // // // //               label="Plan"
// // // // // //               value={formData.plan}
// // // // // //               InputProps={{ readOnly: true }}
// // // // // //             />

// // // // // //             <TextField
// // // // // //               fullWidth
// // // // // //               margin="normal"
// // // // // //               label="Months"
// // // // // //               value={formData.months}
// // // // // //               InputProps={{ readOnly: true }}
// // // // // //             />
// // // // // //           </DialogContent>

// // // // // //           <DialogActions sx={{ padding: "0 24px 24px" }}>
// // // // // //             <Button onClick={() => setOpenForm(false)}>Cancel</Button>
// // // // // //             <Button type="submit" variant="contained">
// // // // // //               Submit
// // // // // //             </Button>
// // // // // //           </DialogActions>
// // // // // //         </form>
// // // // // //       </Dialog>
// // // // // //     </Box>
// // // // // //   );
// // // // // // }

// // // // // import React, { useEffect, useMemo, useRef, useState } from "react";
// // // // // import {
// // // // //   Box,
// // // // //   Button,
// // // // //   Card,
// // // // //   CardContent,
// // // // //   Dialog,
// // // // //   DialogActions,
// // // // //   DialogContent,
// // // // //   DialogTitle,
// // // // //   Tab,
// // // // //   Tabs,
// // // // //   TextField,
// // // // //   Typography,
// // // // // } from "@mui/material";

// // // // // import "./TransformationPlans.css";

// // // // // const sectionBg = "https://venketfitness.com/plans-images/vf-bg.webp";
// // // // // const cardTexture = "https://venketfitness.com/plans-images/Group.webp";
// // // // // const brushBg = "https://venketfitness.com/plans-images/vf-brush-01.png";
// // // // // const featureIcon = "https://venketfitness.com/plans-images/ICON-01.png";

// // // // // const dumbbellImages = [
// // // // //   "https://venketfitness.com/plans-images/barbell-01.png",
// // // // //   "https://venketfitness.com/plans-images/barbell-02.png",
// // // // //   "https://venketfitness.com/plans-images/barbell-03.png",
// // // // //   "https://venketfitness.com/plans-images/barbell-04.png",
// // // // // ];

// // // // // const humanBodyImages = [
// // // // //   "https://venketfitness.com/plans-images/1st-body.png",
// // // // //   "https://venketfitness.com/plans-images/2nd-body.png",
// // // // //   "https://venketfitness.com/plans-images/3rd-body.png",
// // // // //   "https://venketfitness.com/plans-images/4th-body.png",
// // // // // ];

// // // // // const personalTrainingPlans = [
// // // // //   {
// // // // //     id: 1,
// // // // //     price: "₹25,000",
// // // // //     oldPrice: "₹30,000",
// // // // //     months: "1 Month",
// // // // //     perLabel: "Per 1 Month",
// // // // //     features: [
// // // // //       "Gym Access Without Any Charges",
// // // // //       "Personalised Nutrition Plan",
// // // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // // //       "Weekly Progress Check-ins",
// // // // //       "Supplementation Guidance",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     price: "₹70,000",
// // // // //     oldPrice: "₹84,000",
// // // // //     months: "3 Months",
// // // // //     perLabel: "Per 3 Months",
// // // // //     features: [
// // // // //       "Gym Access Without Any Charges",
// // // // //       "Personalised Nutrition Plan",
// // // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // // //       "Weekly Progress Check-ins",
// // // // //       "Supplementation Guidance",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     price: "₹1,30,000",
// // // // //     oldPrice: "₹1,56,000",
// // // // //     months: "6 Months",
// // // // //     perLabel: "Per 6 Months",
// // // // //     features: [
// // // // //       "Gym Access Without Any Charges",
// // // // //       "Personalised Nutrition Plan",
// // // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // // //       "Weekly Progress Check-ins",
// // // // //       "Supplementation Guidance",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     price: "₹2,50,000",
// // // // //     oldPrice: "₹2,88,000",
// // // // //     months: "12 Months",
// // // // //     perLabel: "Per 12 Months",
// // // // //     features: [
// // // // //       "Gym Access Without Any Charges",
// // // // //       "Personalised Nutrition Plan",
// // // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // // //       "Weekly Progress Check-ins",
// // // // //       "Supplementation Guidance",
// // // // //     ],
// // // // //   },
// // // // // ];

// // // // // const premiumCustomizedPlans = [
// // // // //   {
// // // // //     id: 5,
// // // // //     price: "₹50,000",
// // // // //     oldPrice: "₹60,000",
// // // // //     months: "1 Month",
// // // // //     perLabel: "Per 1 Month",
// // // // //     features: [
// // // // //       "Customised Diet & Diet Plan",
// // // // //       "Gym Access without Any Charges",
// // // // //       "Weekly 5 Sessions",
// // // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // // //       "Weekly Progress Check-ins",
// // // // //       "Supplementation Guidance",
// // // // //       "Free Consultation with Venkat Sir After Joining",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 6,
// // // // //     price: "₹1,35,000",
// // // // //     oldPrice: "₹1,60,000",
// // // // //     months: "3 Months",
// // // // //     perLabel: "Per 3 Months",
// // // // //     features: [
// // // // //       "Customised Diet & Diet Plan",
// // // // //       "Gym Access without Any Charges",
// // // // //       "Weekly 5 Sessions",
// // // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // // //       "Weekly Progress Check-ins",
// // // // //       "Supplementation Guidance",
// // // // //       "Free Consultation with Venkat Sir After Joining",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 7,
// // // // //     price: "₹2,55,000",
// // // // //     oldPrice: "₹2,80,000",
// // // // //     months: "6 Months",
// // // // //     perLabel: "Per 6 Months",
// // // // //     features: [
// // // // //       "Customised Diet & Diet Plan",
// // // // //       "Gym Access without Any Charges",
// // // // //       "Weekly 5 Sessions",
// // // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // // //       "Weekly Progress Check-ins",
// // // // //       "Supplementation Guidance",
// // // // //       "Free Consultation with Venkat Sir After Joining",
// // // // //     ],
// // // // //   },
// // // // // ];

// // // // // const cardBgByIndex = ["#005967", "#00424C", "#005967", "#00424C"];

// // // // // export default function TransformationPlans() {
// // // // //   const [tabValue, setTabValue] = useState(0);
// // // // //   const [openForm, setOpenForm] = useState(false);
// // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // //   const sliderRef = useRef(null);

// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     phone: "",
// // // // //     email: "",
// // // // //     plan: "",
// // // // //     months: "",
// // // // //   });

// // // // //   const activePlans = useMemo(() => {
// // // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // // //   }, [tabValue]);

// // // // //   const activePlanName =
// // // // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // // //   useEffect(() => {
// // // // //     setCurrentSlide(0);
// // // // //     if (sliderRef.current) {
// // // // //       sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
// // // // //     }
// // // // //   }, [tabValue]);

// // // // //   const handleApplyNow = (plan) => {
// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       plan: activePlanName,
// // // // //       months: plan.months,
// // // // //     }));
// // // // //     setOpenForm(true);
// // // // //   };

// // // // //   const handleFieldChange = (field) => (event) => {
// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       [field]: event.target.value,
// // // // //     }));
// // // // //   };

// // // // //   const handleSubmit = (event) => {
// // // // //     event.preventDefault();
// // // // //     console.log("Form submitted:", formData);
// // // // //     setOpenForm(false);
// // // // //   };

// // // // //   const scrollToSlide = (index) => {
// // // // //     const slider = sliderRef.current;
// // // // //     if (!slider) return;

// // // // //     const safeIndex = Math.max(0, Math.min(index, activePlans.length - 1));
// // // // //     const card = slider.children[safeIndex];
// // // // //     if (!card) return;

// // // // //     slider.scrollTo({
// // // // //       left: card.offsetLeft - 12,
// // // // //       behavior: "smooth",
// // // // //     });
// // // // //     setCurrentSlide(safeIndex);
// // // // //   };

// // // // //   const handlePrev = () => {
// // // // //     scrollToSlide(currentSlide - 1);
// // // // //   };

// // // // //   const handleNext = () => {
// // // // //     scrollToSlide(currentSlide + 1);
// // // // //   };

// // // // //   const handleSliderScroll = () => {
// // // // //     const slider = sliderRef.current;
// // // // //     if (!slider) return;

// // // // //     const children = Array.from(slider.children);
// // // // //     if (!children.length) return;

// // // // //     let nearestIndex = 0;
// // // // //     let nearestDistance = Number.POSITIVE_INFINITY;

// // // // //     children.forEach((child, index) => {
// // // // //       const distance = Math.abs(child.offsetLeft - slider.scrollLeft);
// // // // //       if (distance < nearestDistance) {
// // // // //         nearestDistance = distance;
// // // // //         nearestIndex = index;
// // // // //       }
// // // // //     });

// // // // //     if (nearestIndex !== currentSlide) {
// // // // //       setCurrentSlide(nearestIndex);
// // // // //     }
// // // // //   };

// // // // //   const renderPlanCard = (plan, index, extraClass = "") => (
// // // // //     <Card
// // // // //       key={plan.id}
// // // // //       className={`tp-card ${
// // // // //         index === 0 ? "tp-card-first" : ""
// // // // //       } ${index === activePlans.length - 1 ? "tp-card-last" : ""} ${extraClass}`}
// // // // //       sx={{
// // // // //         backgroundColor: cardBgByIndex[index],
// // // // //         backgroundImage: `url(${cardTexture})`,
// // // // //       }}
// // // // //     >
// // // // //       <CardContent className="tp-card-content">
// // // // //         <Box className="tp-top-price-row">
// // // // //           <Typography className="tp-main-price">{plan.price}</Typography>
// // // // //           <Typography className="tp-gst">+Gst</Typography>
// // // // //         </Box>

// // // // //         <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// // // // //         <Box className="tp-dumbbell-row">
// // // // //           <img
// // // // //             src={dumbbellImages[index]}
// // // // //             alt="Dumbbell"
// // // // //             className="tp-dumbbell-image"
// // // // //           />
// // // // //         </Box>

// // // // //         <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // // // //         <Box className="tp-features-list">
// // // // //           {plan.features.map((feature) => (
// // // // //             <Box className="tp-feature-item" key={feature}>
// // // // //               <img
// // // // //                 src={featureIcon}
// // // // //                 alt="feature icon"
// // // // //                 className="tp-feature-icon"
// // // // //               />
// // // // //               <span>{feature}</span>
// // // // //             </Box>
// // // // //           ))}
// // // // //         </Box>

// // // // //         <Button className="tp-apply-btn" onClick={() => handleApplyNow(plan)}>
// // // // //           Apply Now
// // // // //         </Button>

// // // // //         <img
// // // // //           src={humanBodyImages[index]}
// // // // //           alt="Human Body"
// // // // //           className="tp-human-body"
// // // // //         />
// // // // //       </CardContent>
// // // // //     </Card>
// // // // //   );

// // // // //   return (
// // // // //     <Box
// // // // //       className="tp-section"
// // // // //       sx={{
// // // // //         backgroundImage: `linear-gradient(rgba(7, 0, 56, 0.42), rgba(7, 0, 56, 0.58)), url(${sectionBg})`,
// // // // //       }}
// // // // //     >
// // // // //       <Box className="tp-container">
// // // // //         <Typography className="tp-title">
// // // // //           Choose Your Transformation Plan
// // // // //         </Typography>

// // // // //         <Typography className="tp-subtitle">
// // // // //           This is not a gym. This is a transformation system
// // // // //         </Typography>

// // // // //         <Box className="tp-tabs-wrapper">
// // // // //           <Tabs
// // // // //             value={tabValue}
// // // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // // //             className="tp-tabs"
// // // // //           >
// // // // //             <Tab label="Personal Training" className="tp-tab" />
// // // // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // // // //           </Tabs>
// // // // //         </Box>

// // // // //         <Box className="tp-offer-brush-img">
// // // // //           <img src={brushBg} alt="Offer Brush" className="tp-brush-bg" />
// // // // //           <Box className="tp-brush-text">
// // // // //             <Typography className="tp-offer-small">
// // // // //               Special Offer on Personal Training Packages on the Occasion of
// // // // //             </Typography>
// // // // //             <Typography className="tp-offer-big">
// // // // //               4TH GYM ANNIVERSARY
// // // // //             </Typography>
// // // // //           </Box>
// // // // //         </Box>

// // // // //         <Box className="tp-cards-grid">
// // // // //           {activePlans.map((plan, index) => renderPlanCard(plan, index))}
// // // // //         </Box>

// // // // //         <Box className="tp-slider-wrapper">
// // // // //           <Box
// // // // //             className="tp-slider"
// // // // //             ref={sliderRef}
// // // // //             onScroll={handleSliderScroll}
// // // // //           >
// // // // //             {activePlans.map((plan, index) =>
// // // // //               renderPlanCard(plan, index, "tp-mobile-card")
// // // // //             )}
// // // // //           </Box>

// // // // //           <Box className="tp-slider-controls">
// // // // //             <button
// // // // //               type="button"
// // // // //               className="tp-arrow"
// // // // //               onClick={handlePrev}
// // // // //               disabled={currentSlide === 0}
// // // // //               aria-label="Previous plan"
// // // // //             >
// // // // //               &#8249;
// // // // //             </button>

// // // // //             <Box className="tp-dots">
// // // // //               {activePlans.map((_, index) => (
// // // // //                 <button
// // // // //                   type="button"
// // // // //                   key={index}
// // // // //                   className={`tp-dot ${index === currentSlide ? "active" : ""}`}
// // // // //                   onClick={() => scrollToSlide(index)}
// // // // //                   aria-label={`Go to plan ${index + 1}`}
// // // // //                 />
// // // // //               ))}
// // // // //             </Box>

// // // // //             <button
// // // // //               type="button"
// // // // //               className="tp-arrow"
// // // // //               onClick={handleNext}
// // // // //               disabled={currentSlide === activePlans.length - 1}
// // // // //               aria-label="Next plan"
// // // // //             >
// // // // //               &#8250;
// // // // //             </button>
// // // // //           </Box>
// // // // //         </Box>
// // // // //       </Box>

// // // // //       <Dialog
// // // // //         open={openForm}
// // // // //         onClose={() => setOpenForm(false)}
// // // // //         fullWidth
// // // // //         maxWidth="sm"
// // // // //         PaperProps={{
// // // // //           className: "tp-dialog-paper",
// // // // //         }}
// // // // //       >
// // // // //         <form onSubmit={handleSubmit}>
// // // // //           <DialogTitle className="tp-dialog-title">Apply for Plan</DialogTitle>

// // // // //           <DialogContent>
// // // // //             <TextField
// // // // //               fullWidth
// // // // //               margin="normal"
// // // // //               label="Full Name"
// // // // //               value={formData.name}
// // // // //               onChange={handleFieldChange("name")}
// // // // //             />

// // // // //             <TextField
// // // // //               fullWidth
// // // // //               margin="normal"
// // // // //               label="Phone Number"
// // // // //               value={formData.phone}
// // // // //               onChange={handleFieldChange("phone")}
// // // // //             />

// // // // //             <TextField
// // // // //               fullWidth
// // // // //               margin="normal"
// // // // //               label="Email Address"
// // // // //               value={formData.email}
// // // // //               onChange={handleFieldChange("email")}
// // // // //             />

// // // // //             <TextField
// // // // //               fullWidth
// // // // //               margin="normal"
// // // // //               label="Plan"
// // // // //               value={formData.plan}
// // // // //               InputProps={{ readOnly: true }}
// // // // //             />

// // // // //             <TextField
// // // // //               fullWidth
// // // // //               margin="normal"
// // // // //               label="Months"
// // // // //               value={formData.months}
// // // // //               InputProps={{ readOnly: true }}
// // // // //             />
// // // // //           </DialogContent>

// // // // //           <DialogActions sx={{ padding: "0 24px 24px" }}>
// // // // //             <Button onClick={() => setOpenForm(false)}>Cancel</Button>
// // // // //             <Button type="submit" variant="contained">
// // // // //               Submit
// // // // //             </Button>
// // // // //           </DialogActions>
// // // // //         </form>
// // // // //       </Dialog>
// // // // //     </Box>
// // // // //   );
// // // // // }

// // // // import React, { useEffect, useMemo, useRef, useState } from "react";
// // // // import {
// // // //   Box,
// // // //   Button,
// // // //   Card,
// // // //   CardContent,
// // // //   Dialog,
// // // //   DialogActions,
// // // //   DialogContent,
// // // //   DialogTitle,
// // // //   Tab,
// // // //   Tabs,
// // // //   TextField,
// // // //   Typography,
// // // // } from "@mui/material";

// // // // import "./TransformationPlans.css";

// // // // const sectionBg = "https://venketfitness.com/plans-images/vf-bg.webp";
// // // // const cardTexture = "https://venketfitness.com/plans-images/Group.webp";
// // // // const brushBg = "https://venketfitness.com/plans-images/vf-brush-01.png";
// // // // const featureIcon = "https://venketfitness.com/plans-images/ICON-01.png";

// // // // const dumbbellImages = [
// // // //   "https://venketfitness.com/plans-images/barbell-01.png",
// // // //   "https://venketfitness.com/plans-images/barbell-02.png",
// // // //   "https://venketfitness.com/plans-images/barbell-03.png",
// // // //   "https://venketfitness.com/plans-images/barbell-04.png",
// // // // ];

// // // // const humanBodyImages = [
// // // //   "https://venketfitness.com/plans-images/1st-body.png",
// // // //   "https://venketfitness.com/plans-images/2nd-body.png",
// // // //   "https://venketfitness.com/plans-images/3rd-body.png",
// // // //   "https://venketfitness.com/plans-images/4th-body.png",
// // // // ];

// // // // const personalTrainingPlans = [
// // // //   {
// // // //     id: 1,
// // // //     price: "₹25,000",
// // // //     oldPrice: "₹30,000",
// // // //     months: "1 Month",
// // // //     perLabel: "Per 1 Month",
// // // //     features: [
// // // //       "Gym Access Without Any Charges",
// // // //       "Personalised Nutrition Plan",
// // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     price: "₹70,000",
// // // //     oldPrice: "₹84,000",
// // // //     months: "3 Months",
// // // //     perLabel: "Per 3 Months",
// // // //     features: [
// // // //       "Gym Access Without Any Charges",
// // // //       "Personalised Nutrition Plan",
// // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     price: "₹1,30,000",
// // // //     oldPrice: "₹1,56,000",
// // // //     months: "6 Months",
// // // //     perLabel: "Per 6 Months",
// // // //     features: [
// // // //       "Gym Access Without Any Charges",
// // // //       "Personalised Nutrition Plan",
// // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     price: "₹2,50,000",
// // // //     oldPrice: "₹2,88,000",
// // // //     months: "12 Months",
// // // //     perLabel: "Per 12 Months",
// // // //     features: [
// // // //       "Gym Access Without Any Charges",
// // // //       "Personalised Nutrition Plan",
// // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //     ],
// // // //   },
// // // // ];

// // // // const premiumCustomizedPlans = [
// // // //   {
// // // //     id: 5,
// // // //     price: "₹50,000",
// // // //     oldPrice: "₹60,000",
// // // //     months: "1 Month",
// // // //     perLabel: "Per 1 Month",
// // // //     features: [
// // // //       "Customised Diet & Diet Plan",
// // // //       "Gym Access without Any Charges",
// // // //       "Weekly 5 Sessions",
// // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //       "Free Consultation with Venkat Sir After Joining",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     price: "₹1,35,000",
// // // //     oldPrice: "₹1,60,000",
// // // //     months: "3 Months",
// // // //     perLabel: "Per 3 Months",
// // // //     features: [
// // // //       "Customised Diet & Diet Plan",
// // // //       "Gym Access without Any Charges",
// // // //       "Weekly 5 Sessions",
// // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //       "Free Consultation with Venkat Sir After Joining",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     price: "₹2,55,000",
// // // //     oldPrice: "₹2,80,000",
// // // //     months: "6 Months",
// // // //     perLabel: "Per 6 Months",
// // // //     features: [
// // // //       "Customised Diet & Diet Plan",
// // // //       "Gym Access without Any Charges",
// // // //       "Weekly 5 Sessions",
// // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //       "Free Consultation with Venkat Sir After Joining",
// // // //     ],
// // // //   },
// // // // ];

// // // // const cardBgByIndex = ["#005967", "#00424C", "#005967", "#00424C"];

// // // // export default function TransformationPlans() {
// // // //   const [tabValue, setTabValue] = useState(0);
// // // //   const [openForm, setOpenForm] = useState(false);

// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     email: "",
// // // //     plan: "",
// // // //     months: "",
// // // //   });

// // // //   const activePlans = useMemo(() => {
// // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // //   }, [tabValue]);

// // // //   const activePlanName =
// // // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // //   const handleApplyNow = (plan) => {
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       plan: activePlanName,
// // // //       months: plan.months,
// // // //     }));
// // // //     setOpenForm(true);
// // // //   };

// // // //   const handleFieldChange = (field) => (event) => {
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [field]: event.target.value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = (event) => {
// // // //     event.preventDefault();
// // // //     console.log("Form submitted:", formData);
// // // //     setOpenForm(false);
// // // //   };

// // // //   const renderPlanCard = (plan, index) => (
// // // //     <Card
// // // //       key={plan.id}
// // // //       className="tp-card"
// // // //       sx={{
// // // //         backgroundColor: cardBgByIndex[index],
// // // //         backgroundImage: `url(${cardTexture})`,
// // // //       }}
// // // //     >
// // // //       <CardContent className="tp-card-content">
// // // //         <Box className="tp-top-price-row">
// // // //           <Typography className="tp-main-price">{plan.price}</Typography>
// // // //           <Typography className="tp-gst">+Gst</Typography>
// // // //         </Box>

// // // //         <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// // // //         <Box className="tp-dumbbell-row">
// // // //           <img
// // // //             src={dumbbellImages[index]}
// // // //             alt="Dumbbell"
// // // //             className="tp-dumbbell-image"
// // // //           />
// // // //         </Box>

// // // //         <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // // //         <Box className="tp-features-list">
// // // //           {plan.features.map((feature) => (
// // // //             <Box className="tp-feature-item" key={feature}>
// // // //               <img
// // // //                 src={featureIcon}
// // // //                 alt="feature icon"
// // // //                 className="tp-feature-icon"
// // // //               />
// // // //               <span>{feature}</span>
// // // //             </Box>
// // // //           ))}
// // // //         </Box>

// // // //         <Button className="tp-apply-btn" onClick={() => handleApplyNow(plan)}>
// // // //           Apply Now
// // // //         </Button>

// // // //         <img
// // // //           src={humanBodyImages[index]}
// // // //           alt="Human Body"
// // // //           className="tp-human-body"
// // // //         />
// // // //       </CardContent>
// // // //     </Card>
// // // //   );

// // // //   return (
// // // //     <Box
// // // //       className="tp-section"
// // // //       sx={{
// // // //         backgroundImage: `linear-gradient(rgba(7,0,56,0.42), rgba(7,0,56,0.58)), url(${sectionBg})`,
// // // //       }}
// // // //     >
// // // //       <Box className="tp-container">
// // // //         <Typography className="tp-title">
// // // //           Choose Your Transformation Plan
// // // //         </Typography>

// // // //         <Typography className="tp-subtitle">
// // // //           This is not a gym. This is a transformation system
// // // //         </Typography>

// // // //         <Box className="tp-tabs-wrapper">
// // // //           <Tabs
// // // //             value={tabValue}
// // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // //             className="tp-tabs"
// // // //           >
// // // //             <Tab label="Personal Training" className="tp-tab" />
// // // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // // //           </Tabs>
// // // //         </Box>

// // // //         <Box className="tp-offer-brush-img">
// // // //           <img src={brushBg} alt="Offer Brush" className="tp-brush-bg" />
// // // //           <Box className="tp-brush-text">
// // // //             <Typography className="tp-offer-small">
// // // //               Special Offer on Personal Training Packages on the Occasion of
// // // //             </Typography>
// // // //             <Typography className="tp-offer-big">
// // // //               4TH GYM ANNIVERSARY
// // // //             </Typography>
// // // //           </Box>
// // // //         </Box>

// // // //         {/* CENTER ALIGN GRID FIX */}
// // // //         <Box
// // // //           className="tp-cards-grid"
// // // //           sx={{
// // // //             gridTemplateColumns: `repeat(${activePlans.length}, 1fr)`,
// // // //             maxWidth: activePlans.length === 3 ? "960px" : "100%",
// // // //             margin: "0 auto",
// // // //           }}
// // // //         >
// // // //           {activePlans.map((plan, index) => renderPlanCard(plan, index))}
// // // //         </Box>
// // // //       </Box>

// // // //       <Dialog
// // // //         open={openForm}
// // // //         onClose={() => setOpenForm(false)}
// // // //         fullWidth
// // // //         maxWidth="sm"
// // // //         PaperProps={{
// // // //           className: "tp-dialog-paper",
// // // //         }}
// // // //       >
// // // //         <form onSubmit={handleSubmit}>
// // // //           <DialogTitle className="tp-dialog-title">Apply for Plan</DialogTitle>

// // // //           <DialogContent>
// // // //             <TextField
// // // //               fullWidth
// // // //               margin="normal"
// // // //               label="Full Name"
// // // //               value={formData.name}
// // // //               onChange={handleFieldChange("name")}
// // // //             />

// // // //             <TextField
// // // //               fullWidth
// // // //               margin="normal"
// // // //               label="Phone Number"
// // // //               value={formData.phone}
// // // //               onChange={handleFieldChange("phone")}
// // // //             />

// // // //             <TextField
// // // //               fullWidth
// // // //               margin="normal"
// // // //               label="Email Address"
// // // //               value={formData.email}
// // // //               onChange={handleFieldChange("email")}
// // // //             />

// // // //             <TextField
// // // //               fullWidth
// // // //               margin="normal"
// // // //               label="Plan"
// // // //               value={formData.plan}
// // // //               InputProps={{ readOnly: true }}
// // // //             />

// // // //             <TextField
// // // //               fullWidth
// // // //               margin="normal"
// // // //               label="Months"
// // // //               value={formData.months}
// // // //               InputProps={{ readOnly: true }}
// // // //             />
// // // //           </DialogContent>

// // // //           <DialogActions sx={{ padding: "0 24px 24px" }}>
// // // //             <Button onClick={() => setOpenForm(false)}>Cancel</Button>
// // // //             <Button type="submit" variant="contained">
// // // //               Submit
// // // //             </Button>
// // // //           </DialogActions>
// // // //         </form>
// // // //       </Dialog>
// // // //     </Box>
// // // //   );
// // // // }

// // // // import React, { useMemo, useRef, useState } from "react";
// // // // import {
// // // //   Box,
// // // //   Button,
// // // //   Card,
// // // //   CardContent,
// // // //   Tab,
// // // //   Tabs,
// // // //   Typography,
// // // // } from "@mui/material";

// // // // import "./TransformationPlans.css";

// // // // const sectionBg = "https://venketfitness.com/plans-images/vf-bg.webp";
// // // // const cardTexture = "https://venketfitness.com/plans-images/Group.webp";
// // // // const brushBg = "https://venketfitness.com/plans-images/vf-brush-01.png";
// // // // const featureIcon = "https://venketfitness.com/plans-images/ICON-01.png";

// // // // const dumbbellImages = [
// // // //   "https://venketfitness.com/plans-images/barbell-01.png",
// // // //   "https://venketfitness.com/plans-images/barbell-02.png",
// // // //   "https://venketfitness.com/plans-images/barbell-03.png",
// // // //   "https://venketfitness.com/plans-images/barbell-04.png",
// // // // ];

// // // // const humanBodyImages = [
// // // //   "https://venketfitness.com/plans-images/1st-body.png",
// // // //   "https://venketfitness.com/plans-images/2nd-body.png",
// // // //   "https://venketfitness.com/plans-images/3rd-body.png",
// // // //   "https://venketfitness.com/plans-images/4th-body.png",
// // // // ];

// // // // const personalTrainingPlans = [
// // // //   {
// // // //     id: 1,
// // // //     price: "₹25,000",
// // // //     oldPrice: "₹30,000",
// // // //     months: "1 Month",
// // // //     perLabel: "Per 1 Month",
// // // //     features: [
// // // //       "Gym Access Without Any Charges",
// // // //       "Personalised Nutrition Plan",
// // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     price: "₹70,000",
// // // //     oldPrice: "₹84,000",
// // // //     months: "3 Months",
// // // //     perLabel: "Per 3 Months",
// // // //     features: [
// // // //       "Gym Access Without Any Charges",
// // // //       "Personalised Nutrition Plan",
// // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     price: "₹1,30,000",
// // // //     oldPrice: "₹1,56,000",
// // // //     months: "6 Months",
// // // //     perLabel: "Per 6 Months",
// // // //     features: [
// // // //       "Gym Access Without Any Charges",
// // // //       "Personalised Nutrition Plan",
// // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     price: "₹2,50,000",
// // // //     oldPrice: "₹2,88,000",
// // // //     months: "12 Months",
// // // //     perLabel: "Per 12 Months",
// // // //     features: [
// // // //       "Gym Access Without Any Charges",
// // // //       "Personalised Nutrition Plan",
// // // //       "Weekly 5 Sessions 1 on 1 Training",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //     ],
// // // //   },
// // // // ];

// // // // const premiumCustomizedPlans = [
// // // //   {
// // // //     id: 5,
// // // //     price: "₹50,000",
// // // //     oldPrice: "₹60,000",
// // // //     months: "1 Month",
// // // //     perLabel: "Per 1 Month",
// // // //     features: [
// // // //       "Customised Diet & Diet Plan",
// // // //       "Gym Access without Any Charges",
// // // //       "Weekly 5 Sessions",
// // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //       "Free Consultation with Venkat Sir After Joining",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     price: "₹1,35,000",
// // // //     oldPrice: "₹1,60,000",
// // // //     months: "3 Months",
// // // //     perLabel: "Per 3 Months",
// // // //     features: [
// // // //       "Customised Diet & Diet Plan",
// // // //       "Gym Access without Any Charges",
// // // //       "Weekly 5 Sessions",
// // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //       "Free Consultation with Venkat Sir After Joining",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     price: "₹2,55,000",
// // // //     oldPrice: "₹2,80,000",
// // // //     months: "6 Months",
// // // //     perLabel: "Per 6 Months",
// // // //     features: [
// // // //       "Customised Diet & Diet Plan",
// // // //       "Gym Access without Any Charges",
// // // //       "Weekly 5 Sessions",
// // // //       "1 on 1 Training with Level 4 Certified Trainers",
// // // //       "Weekly Progress Check-ins",
// // // //       "Supplementation Guidance",
// // // //       "Free Consultation with Venkat Sir After Joining",
// // // //     ],
// // // //   },
// // // // ];

// // // // const cardBgByIndex = ["#005967", "#00424C", "#005967", "#00424C"];

// // // // export default function TransformationPlans() {
// // // //   const [tabValue, setTabValue] = useState(0);

// // // //   const sliderRef = useRef(null);

// // // //   const activePlans = useMemo(() => {
// // // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // // //   }, [tabValue]);

// // // //   const activePlanName =
// // // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // // //   /* ✅ WhatsApp redirect */
// // // //   const handleApplyNow = (plan) => {
// // // //     const phone = "919676146789";

// // // //     const message = `I want to join Venkat Fitness Gym Hyderabad
// // // // JOIN TODAY
// // // // Plan: ${activePlanName}
// // // // Duration: ${plan.months}`;

// // // //     const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
// // // //       message
// // // //     )}`;

// // // //     window.open(whatsappURL, "_blank");
// // // //   };

// // // //   const renderPlanCard = (plan, index) => (
// // // //     <Card
// // // //       key={plan.id}
// // // //       className="tp-card"
// // // //       sx={{
// // // //         backgroundColor: cardBgByIndex[index],
// // // //         backgroundImage: `url(${cardTexture})`,
// // // //       }}
// // // //     >
// // // //       <CardContent className="tp-card-content">
// // // //         <Box className="tp-top-price-row">
// // // //           <Typography className="tp-main-price">{plan.price}</Typography>
// // // //           <Typography className="tp-gst">+Gst</Typography>
// // // //         </Box>

// // // //         <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// // // //         <Box className="tp-dumbbell-row">
// // // //           <img
// // // //             src={dumbbellImages[index]}
// // // //             alt="Dumbbell"
// // // //             className="tp-dumbbell-image"
// // // //           />
// // // //         </Box>

// // // //         <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // // //         <Box className="tp-features-list">
// // // //           {plan.features.map((feature) => (
// // // //             <Box className="tp-feature-item" key={feature}>
// // // //               <img
// // // //                 src={featureIcon}
// // // //                 alt="feature icon"
// // // //                 className="tp-feature-icon"
// // // //               />
// // // //               <span>{feature}</span>
// // // //             </Box>
// // // //           ))}
// // // //         </Box>

// // // //         <Button className="tp-apply-btn" onClick={() => handleApplyNow(plan)}>
// // // //           Apply Now
// // // //         </Button>

// // // //         <img
// // // //           src={humanBodyImages[index]}
// // // //           alt="Human Body"
// // // //           className="tp-human-body"
// // // //         />
// // // //       </CardContent>
// // // //     </Card>
// // // //   );

// // // //   return (
// // // //     <Box
// // // //       className="tp-section"
// // // //       sx={{
// // // //         backgroundImage: `linear-gradient(rgba(7,0,56,0.42), rgba(7,0,56,0.58)), url(${sectionBg})`,
// // // //       }}
// // // //     >
// // // //       <Box className="tp-container">
// // // //         <Typography className="tp-title">
// // // //           Choose Your Transformation Plan
// // // //         </Typography>

// // // //         <Typography className="tp-subtitle">
// // // //           This is not a gym. This is a transformation system
// // // //         </Typography>

// // // //         <Box className="tp-tabs-wrapper">
// // // //           <Tabs
// // // //             value={tabValue}
// // // //             onChange={(_, newValue) => setTabValue(newValue)}
// // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // //             className="tp-tabs"
// // // //           >
// // // //             <Tab label="Personal Training" className="tp-tab" />
// // // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // // //           </Tabs>
// // // //         </Box>

// // // //         <Box className="tp-offer-brush-img">
// // // //           <img src={brushBg} alt="Offer Brush" className="tp-brush-bg" />

// // // //           <Box className="tp-brush-text">
// // // //             <Typography className="tp-offer-small">
// // // //               Special Offer on Personal Training Packages on the Occasion of
// // // //             </Typography>

// // // //             <Typography className="tp-offer-big">
// // // //               4TH GYM ANNIVERSARY
// // // //             </Typography>
// // // //           </Box>
// // // //         </Box>

// // // //         {/* ✅ Center align 3 premium cards automatically */}
// // // //         <Box
// // // //           className="tp-cards-grid"
// // // //           sx={{
// // // //             gridTemplateColumns: `repeat(${activePlans.length}, 1fr)`,
// // // //             maxWidth: activePlans.length === 3 ? "960px" : "100%",
// // // //             margin: "0 auto",
// // // //           }}
// // // //         >
// // // //           {activePlans.map((plan, index) => renderPlanCard(plan, index))}
// // // //         </Box>
// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // }

// // // import React, { useMemo, useRef, useState } from "react";
// // // import {
// // //   Box,
// // //   Button,
// // //   Card,
// // //   CardContent,
// // //   Tab,
// // //   Tabs,
// // //   Typography,
// // // } from "@mui/material";

// // // import "./TransformationPlans.css";

// // // const sectionBg = "https://venketfitness.com/plans-images/jubliee-hills-gym.webp";
// // // const cardTexture =
// // //   "https://venketfitness.com/plans-images/best-gym-in-hyderabad.webp";
// // // const brushBg =
// // //   "https://venketfitness.com/plans-images/jubilee-hills-gym-hyderabad.png";
// // // const featureIcon =
// // //   "https://venketfitness.com/plans-images/hyderabad-gyms-near-me.png";

// // // const dumbbellImages = [
// // //   "https://venketfitness.com/plans-images/venkat-fitness-gym.png",
// // //   "https://venketfitness.com/plans-images/venkat-fitness-trainer-cost.png",
// // //   "https://venketfitness.com/plans-images/venkat-fitness-gym-price.png",
// // //   "https://venketfitness.com/plans-images/venkat-fitness-online-training.png",
// // // ];

// // // const humanBodyImages = [
// // //   "https://venketfitness.com/plans-images/hyderabad-gyms.png",
// // //   "https://venketfitness.com/plans-images/best-gyms-in-hyderabad.png",
// // //   "https://venketfitness.com/plans-images/gyms-in-hyderabad-with-prices.png",
// // //   "https://venketfitness.com/plans-images/hyderabad-gyms-with-fees.png",
// // // ];

// // // const personalTrainingPlans = [/* SAME AS YOUR CODE */];
// // // const premiumCustomizedPlans = [/* SAME AS YOUR CODE */];

// // // const cardBgByIndex = ["#005967", "#00424C", "#005967", "#00424C"];

// // // const getImageAlt = (url) => {
// // //   const fileName = url.split("/").pop() || "";
// // //   return fileName.replace(/\.(png|jpg|jpeg|webp)$/i, "").replace(/-/g, " ");
// // // };

// // // export default function TransformationPlans() {
// // //   const [tabValue, setTabValue] = useState(0);
// // //   const sliderRef = useRef(null);

// // //   const activePlans = useMemo(() => {
// // //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// // //   }, [tabValue]);

// // //   // ✅ THIS CONTROLS TEXT CHANGE
// // //   const activePlanName =
// // //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// // //   const handleApplyNow = (plan) => {
// // //     const phone = "919676146789";

// // //     const message = `I want to join Venkat Fitness Gym Hyderabad
// // // JOIN TODAY
// // // Plan: ${activePlanName}
// // // Duration: ${plan.months}`;

// // //     const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
// // //       message
// // //     )}`;

// // //     window.open(whatsappURL, "_blank");
// // //   };

// // //   const renderPlanCard = (plan, index) => (
// // //     <Card
// // //       key={plan.id}
// // //       className={`tp-card ${
// // //         index === 0 ? "tp-card-first" : ""
// // //       } ${
// // //         index === activePlans.length - 1 ? "tp-card-last" : ""
// // //       }`}
// // //       sx={{
// // //         backgroundColor: cardBgByIndex[index % cardBgByIndex.length],
// // //         backgroundImage: `url(${cardTexture})`,
// // //       }}
// // //     >
// // //       <CardContent className="tp-card-content">
// // //         <Box className="tp-top-price-row">
// // //           <Typography className="tp-main-price">{plan.price}</Typography>
// // //           <Typography className="tp-gst">+Gst</Typography>
// // //         </Box>

// // //         <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// // //         <Box className="tp-dumbbell-row">
// // //           <img
// // //             src={dumbbellImages[index % dumbbellImages.length]}
// // //             alt={getImageAlt(dumbbellImages[index % dumbbellImages.length])}
// // //             className="tp-dumbbell-image"
// // //           />
// // //         </Box>

// // //         <Typography className="tp-per-label">{plan.perLabel}</Typography>

// // //         <Box className="tp-features-list">
// // //           {plan.features.map((feature) => (
// // //             <Box className="tp-feature-item" key={feature}>
// // //               <img
// // //                 src={featureIcon}
// // //                 alt={getImageAlt(featureIcon)}
// // //                 className="tp-feature-icon"
// // //               />
// // //               <span>{feature}</span>
// // //             </Box>
// // //           ))}
// // //         </Box>

// // //         <Button className="tp-apply-btn" onClick={() => handleApplyNow(plan)}>
// // //           Apply Now
// // //         </Button>

// // //         <img
// // //           src={humanBodyImages[index % humanBodyImages.length]}
// // //           alt={getImageAlt(humanBodyImages[index % humanBodyImages.length])}
// // //           className="tp-human-body"
// // //         />
// // //       </CardContent>
// // //     </Card>
// // //   );

// // //   return (
// // //     <Box
// // //       className="tp-section"
// // //       sx={{
// // //         backgroundImage: `linear-gradient(rgba(7,0,56,0.42), rgba(7,0,56,0.58)), url(${sectionBg})`,
// // //       }}
// // //     >
// // //       <Box className="tp-container">
// // //         <Typography className="tp-title">
// // //           Choose Your Transformation Plan
// // //         </Typography>

// // //         <Typography className="tp-subtitle">
// // //           This is not a gym. This is a transformation system
// // //         </Typography>

// // //         {/* ✅ TABS */}
// // //         <Box className="tp-tabs-wrapper">
// // //           <Tabs
// // //             value={tabValue}
// // //             onChange={(_, newValue) => setTabValue(newValue)}
// // //             TabIndicatorProps={{ style: { display: "none" } }}
// // //             className="tp-tabs"
// // //           >
// // //             <Tab label="Personal Training" className="tp-tab" />
// // //             <Tab label="Premium Customized Plan" className="tp-tab" />
// // //           </Tabs>
// // //         </Box>

// // //         {/* ✅ DYNAMIC OFFER TEXT FIX */}
// // //         <Box className="tp-offer-brush-img">
// // //           <img src={brushBg} alt="offer" className="tp-brush-bg" />

// // //           <Box className="tp-brush-text">
// // //             <Typography className="tp-offer-small">
// // //               Special Offer on {activePlanName} Packages on the Occasion of
// // //             </Typography>

// // //             <Typography className="tp-offer-big">
// // //               4TH GYM ANNIVERSARY
// // //             </Typography>
// // //           </Box>
// // //         </Box>

// // //         {/* DESKTOP GRID */}
// // //         <Box
// // //           className="tp-cards-grid"
// // //           sx={{
// // //             gridTemplateColumns: `repeat(${activePlans.length}, 1fr)`,
// // //             maxWidth: activePlans.length === 3 ? "960px" : "100%",
// // //             margin: "0 auto",
// // //           }}
// // //         >
// // //           {activePlans.map((plan, index) => renderPlanCard(plan, index))}
// // //         </Box>

// // //         {/* MOBILE SLIDER */}
// // //         <Box className="tp-slider-wrapper" ref={sliderRef}>
// // //           <Box className="tp-slider">
// // //             {activePlans.map((plan, index) => (
// // //               <Box key={plan.id}>
// // //                 {renderPlanCard(plan, index)}
// // //               </Box>
// // //             ))}
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   );
// // // }

// // import React, { useMemo, useRef, useState } from "react";
// // import {
// //   Box,
// //   Button,
// //   Card,
// //   CardContent,
// //   Tab,
// //   Tabs,
// //   Typography,
// // } from "@mui/material";

// // import "./TransformationPlans.css";

// // const sectionBg =
// //   "https://venketfitness.com/plans-images/jubliee-hills-gym.webp";
// // const cardTexture =
// //   "https://venketfitness.com/plans-images/best-gym-in-hyderabad.webp";
// // const brushBg =
// //   "https://venketfitness.com/plans-images/jubilee-hills-gym-hyderabad.png";
// // const featureIcon =
// //   "https://venketfitness.com/plans-images/hyderabad-gyms-near-me.png";

// // const dumbbellImages = [
// //   "https://venketfitness.com/plans-images/venkat-fitness-gym.png",
// //   "https://venketfitness.com/plans-images/venkat-fitness-trainer-cost.png",
// //   "https://venketfitness.com/plans-images/venkat-fitness-gym-price.png",
// //   "https://venketfitness.com/plans-images/venkat-fitness-online-training.png",
// // ];

// // const humanBodyImages = [
// //   "https://venketfitness.com/plans-images/hyderabad-gyms.png",
// //   "https://venketfitness.com/plans-images/best-gyms-in-hyderabad.png",
// //   "https://venketfitness.com/plans-images/gyms-in-hyderabad-with-prices.png",
// //   "https://venketfitness.com/plans-images/hyderabad-gyms-with-fees.png",
// // ];

// // const personalTrainingPlans = [
// //   {
// //     id: 1,
// //     price: "₹25,000",
// //     oldPrice: "₹30,000",
// //     months: "1 Month",
// //     perLabel: "Per 1 Month",
// //     features: [
// //       "Gym Access Without Any Charges",
// //       "Personalised Nutrition Plan",
// //       "Weekly 5 Sessions 1 on 1 Training",
// //       "Weekly Progress Check-ins",
// //       "Supplementation Guidance",
// //     ],
// //   },
// //   {
// //     id: 2,
// //     price: "₹70,000",
// //     oldPrice: "₹84,000",
// //     months: "3 Months",
// //     perLabel: "Per 3 Months",
// //     features: [
// //       "Gym Access Without Any Charges",
// //       "Personalised Nutrition Plan",
// //       "Weekly 5 Sessions 1 on 1 Training",
// //       "Weekly Progress Check-ins",
// //       "Supplementation Guidance",
// //     ],
// //   },
// //   {
// //     id: 3,
// //     price: "₹1,30,000",
// //     oldPrice: "₹1,56,000",
// //     months: "6 Months",
// //     perLabel: "Per 6 Months",
// //     features: [
// //       "Gym Access Without Any Charges",
// //       "Personalised Nutrition Plan",
// //       "Weekly 5 Sessions 1 on 1 Training",
// //       "Weekly Progress Check-ins",
// //       "Supplementation Guidance",
// //     ],
// //   },
// //   {
// //     id: 4,
// //     price: "₹2,50,000",
// //     oldPrice: "₹2,88,000",
// //     months: "12 Months",
// //     perLabel: "Per 12 Months",
// //     features: [
// //       "Gym Access Without Any Charges",
// //       "Personalised Nutrition Plan",
// //       "Weekly 5 Sessions 1 on 1 Training",
// //       "Weekly Progress Check-ins",
// //       "Supplementation Guidance",
// //     ],
// //   },
// // ];

// // const premiumCustomizedPlans = [
// //   {
// //     id: 5,
// //     price: "₹50,000",
// //     oldPrice: "₹60,000",
// //     months: "1 Month",
// //     perLabel: "Per 1 Month",
// //     features: [
// //       "Customised Diet & Diet Plan",
// //       "Gym Access without Any Charges",
// //       "Weekly 5 Sessions",
// //       "1 on 1 Training with Level 4 Certified Trainers",
// //       "Weekly Progress Check-ins",
// //       "Supplementation Guidance",
// //       "Free Consultation with Venkat Sir After Joining",
// //     ],
// //   },
// //   {
// //     id: 6,
// //     price: "₹1,35,000",
// //     oldPrice: "₹1,60,000",
// //     months: "3 Months",
// //     perLabel: "Per 3 Months",
// //     features: [
// //       "Customised Diet & Diet Plan",
// //       "Gym Access without Any Charges",
// //       "Weekly 5 Sessions",
// //       "1 on 1 Training with Level 4 Certified Trainers",
// //       "Weekly Progress Check-ins",
// //       "Supplementation Guidance",
// //       "Free Consultation with Venkat Sir After Joining",
// //     ],
// //   },
// //   {
// //     id: 7,
// //     price: "₹2,55,000",
// //     oldPrice: "₹2,80,000",
// //     months: "6 Months",
// //     perLabel: "Per 6 Months",
// //     features: [
// //       "Customised Diet & Diet Plan",
// //       "Gym Access without Any Charges",
// //       "Weekly 5 Sessions",
// //       "1 on 1 Training with Level 4 Certified Trainers",
// //       "Weekly Progress Check-ins",
// //       "Supplementation Guidance",
// //       "Free Consultation with Venkat Sir After Joining",
// //     ],
// //   },
// // ];

// // const cardBgByIndex = ["#005967", "#00424C", "#005967", "#00424C"];

// // const getImageAlt = (url) => {
// //   const fileName = url.split("/").pop() || "";
// //   return fileName.replace(/\.(png|jpg|jpeg|webp)$/i, "").replace(/-/g, " ");
// // };

// // export default function TransformationPlans() {
// //   const [tabValue, setTabValue] = useState(0);
// //   const sliderRef = useRef(null);

// //   const activePlans = useMemo(() => {
// //     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
// //   }, [tabValue]);

// //   const activePlanName =
// //     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

// //   const handleApplyNow = (plan) => {
// //     const phone = "919676146789";

// //     const message = `I want to join Venkat Fitness Gym Hyderabad
// // JOIN TODAY
// // Plan: ${activePlanName}
// // Duration: ${plan.months}`;

// //     const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
// //       message
// //     )}`;

// //     window.open(whatsappURL, "_blank");
// //   };

// //   const renderPlanCard = (plan, index) => (
// //     <Card
// //       key={plan.id}
// //       className={`tp-card ${
// //         index === 0 ? "tp-card-first" : ""
// //       } ${index === activePlans.length - 1 ? "tp-card-last" : ""}`}
// //       sx={{
// //         backgroundColor: cardBgByIndex[index % cardBgByIndex.length],
// //         backgroundImage: `url(${cardTexture})`,
// //       }}
// //     >
// //       <CardContent className="tp-card-content">
// //         <Box className="tp-top-price-row">
// //           <Typography className="tp-main-price">{plan.price}</Typography>
// //           <Typography className="tp-gst">+Gst</Typography>
// //         </Box>

// //         <Typography className="tp-old-price">{plan.oldPrice}</Typography>

// //         <Box className="tp-dumbbell-row">
// //           <img
// //             src={dumbbellImages[index % dumbbellImages.length]}
// //             alt={getImageAlt(dumbbellImages[index % dumbbellImages.length])}
// //             className="tp-dumbbell-image"
// //           />
// //         </Box>

// //         <Typography className="tp-per-label">{plan.perLabel}</Typography>

// //         <Box className="tp-features-list">
// //           {plan.features.map((feature) => (
// //             <Box className="tp-feature-item" key={feature}>
// //               <img
// //                 src={featureIcon}
// //                 alt={getImageAlt(featureIcon)}
// //                 className="tp-feature-icon"
// //               />
// //               <span>{feature}</span>
// //             </Box>
// //           ))}
// //         </Box>

// //         <Button className="tp-apply-btn" onClick={() => handleApplyNow(plan)}>
// //           JOIN TODAY
// //         </Button>

// //         <img
// //           src={humanBodyImages[index % humanBodyImages.length]}
// //           alt={getImageAlt(humanBodyImages[index % humanBodyImages.length])}
// //           className="tp-human-body"
// //         />
// //       </CardContent>
// //     </Card>
// //   );

// //   return (
// //     <Box
// //       className="tp-section"
// //       sx={{
// //         backgroundImage: `linear-gradient(rgba(7,0,56,0.42), rgba(7,0,56,0.58)), url(${sectionBg})`,
// //       }}
// //     >
// //       <Box className="tp-container">
// //         <Typography className="tp-title">
// //           Choose Your Transformation Plan
// //         </Typography>

// //         <Typography className="tp-subtitle">
// //           This is not a gym. This is a transformation system
// //         </Typography>

// //         <Box className="tp-tabs-wrapper">
// //           <Tabs
// //             value={tabValue}
// //             onChange={(_, newValue) => setTabValue(newValue)}
// //             TabIndicatorProps={{ style: { display: "none" } }}
// //             className="tp-tabs"
// //           >
// //             <Tab label="Personal Training" className="tp-tab" />
// //             <Tab label="Premium Customized Plan" className="tp-tab" />
// //           </Tabs>
// //         </Box>

// //         <Box className="tp-offer-brush-img">
// //           <img
// //             src={brushBg}
// //             alt={getImageAlt(brushBg)}
// //             className="tp-brush-bg"
// //           />

// //           <Box className="tp-brush-text">
// //             <Typography className="tp-offer-small">
// //               Special Offer on {activePlanName} Packages on the Occasion of
// //             </Typography>

// //             <Typography className="tp-offer-big">
// //               4TH GYM ANNIVERSARY
// //             </Typography>
// //           </Box>
// //         </Box>

// //         <Box
// //           className="tp-cards-grid"
// //           sx={{
// //             gridTemplateColumns: `repeat(${activePlans.length}, 1fr)`,
// //             maxWidth: activePlans.length === 3 ? "960px" : "100%",
// //             margin: "0 auto",
// //           }}
// //         >
// //           {activePlans.map((plan, index) => renderPlanCard(plan, index))}
// //         </Box>

// //         <Box className="tp-slider-wrapper" ref={sliderRef}>
// //           <Box className="tp-slider">
// //             {activePlans.map((plan, index) => (
// //               <Box key={plan.id} className="tp-mobile-card-wrapper">
// //                 <Card
// //                   className={`tp-card tp-mobile-card ${
// //                     index === 0 ? "tp-card-first" : ""
// //                   } ${index === activePlans.length - 1 ? "tp-card-last" : ""}`}
// //                   sx={{
// //                     backgroundColor:
// //                       cardBgByIndex[index % cardBgByIndex.length],
// //                     backgroundImage: `url(${cardTexture})`,
// //                   }}
// //                 >
// //                   <CardContent className="tp-card-content">
// //                     <Box className="tp-top-price-row">
// //                       <Typography className="tp-main-price">
// //                         {plan.price}
// //                       </Typography>
// //                       <Typography className="tp-gst">+Gst</Typography>
// //                     </Box>

// //                     <Typography className="tp-old-price">
// //                       {plan.oldPrice}
// //                     </Typography>

// //                     <Box className="tp-dumbbell-row">
// //                       <img
// //                         src={dumbbellImages[index % dumbbellImages.length]}
// //                         alt={getImageAlt(
// //                           dumbbellImages[index % dumbbellImages.length]
// //                         )}
// //                         className="tp-dumbbell-image"
// //                       />
// //                     </Box>

// //                     <Typography className="tp-per-label">
// //                       {plan.perLabel}
// //                     </Typography>

// //                     <Box className="tp-features-list">
// //                       {plan.features.map((feature) => (
// //                         <Box className="tp-feature-item" key={feature}>
// //                           <img
// //                             src={featureIcon}
// //                             alt={getImageAlt(featureIcon)}
// //                             className="tp-feature-icon"
// //                           />
// //                           <span>{feature}</span>
// //                         </Box>
// //                       ))}
// //                     </Box>

// //                     <Button
// //                       className="tp-apply-btn"
// //                       onClick={() => handleApplyNow(plan)}
// //                     >
// //                       JOIN TODAY
// //                     </Button>

// //                     <img
// //                       src={humanBodyImages[index % humanBodyImages.length]}
// //                       alt={getImageAlt(
// //                         humanBodyImages[index % humanBodyImages.length]
// //                       )}
// //                       className="tp-human-body"
// //                     />
// //                   </CardContent>
// //                 </Card>
// //               </Box>
// //             ))}
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // }

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Tab,
//   Tabs,
//   Typography,
// } from "@mui/material";

// import "./TransformationPlans.css";

// const sectionBg =
//   "https://venketfitness.com/plans-images/jubliee-hills-gym.webp";
// const cardTexture =
//   "https://venketfitness.com/plans-images/best-gym-in-hyderabad.webp";
// const brushBg =
//   "https://venketfitness.com/plans-images/jubilee-hills-gym-hyderabad.png";
// const featureIcon =
//   "https://venketfitness.com/plans-images/hyderabad-gyms-near-me.png";

// const dumbbellImages = [
//   "https://venketfitness.com/plans-images/venkat-fitness-gym.png",
//   "https://venketfitness.com/plans-images/venkat-fitness-trainer-cost.png",
//   "https://venketfitness.com/plans-images/venkat-fitness-gym-price.png",
//   "https://venketfitness.com/plans-images/venkat-fitness-online-training.png",
// ];

// const humanBodyImages = [
//   "https://venketfitness.com/plans-images/hyderabad-gyms.png",
//   "https://venketfitness.com/plans-images/best-gyms-in-hyderabad.png",
//   "https://venketfitness.com/plans-images/gyms-in-hyderabad-with-prices.png",
//   "https://venketfitness.com/plans-images/hyderabad-gyms-with-fees.png",
// ];

// const personalTrainingPlans = [
//   {
//     id: 1,
//     price: "₹25,000",
//     oldPrice: "₹30,000",
//     months: "1 Month",
//     perLabel: "Per 1 Month",
//     features: [
//       "Gym Access Without Any Charges",
//       "Personalised Nutrition Plan",
//       "Weekly 5 Sessions 1 on 1 Training",
//       "Weekly Progress Check-ins",
//       "Supplementation Guidance",
//     ],
//   },
//   {
//     id: 2,
//     price: "₹70,000",
//     oldPrice: "₹84,000",
//     months: "3 Months",
//     perLabel: "Per 3 Months",
//     features: [
//       "Gym Access Without Any Charges",
//       "Personalised Nutrition Plan",
//       "Weekly 5 Sessions 1 on 1 Training",
//       "Weekly Progress Check-ins",
//       "Supplementation Guidance",
//     ],
//   },
//   {
//     id: 3,
//     price: "₹1,30,000",
//     oldPrice: "₹1,56,000",
//     months: "6 Months",
//     perLabel: "Per 6 Months",
//     features: [
//       "Gym Access Without Any Charges",
//       "Personalised Nutrition Plan",
//       "Weekly 5 Sessions 1 on 1 Training",
//       "Weekly Progress Check-ins",
//       "Supplementation Guidance",
//     ],
//   },
//   {
//     id: 4,
//     price: "₹2,50,000",
//     oldPrice: "₹2,88,000",
//     months: "12 Months",
//     perLabel: "Per 12 Months",
//     features: [
//       "Gym Access Without Any Charges",
//       "Personalised Nutrition Plan",
//       "Weekly 5 Sessions 1 on 1 Training",
//       "Weekly Progress Check-ins",
//       "Supplementation Guidance",
//     ],
//   },
// ];

// const premiumCustomizedPlans = [
//   {
//     id: 5,
//     price: "₹50,000",
//     oldPrice: "₹60,000",
//     months: "1 Month",
//     perLabel: "Per 1 Month",
//     features: [
//       "Customised Diet & Diet Plan",
//       "Gym Access without Any Charges",
//       "Weekly 5 Sessions",
//       "1 on 1 Training with Level 4 Certified Trainers",
//       "Weekly Progress Check-ins",
//       "Supplementation Guidance",
//       "Free Consultation with Venkat Sir After Joining",
//     ],
//   },
//   {
//     id: 6,
//     price: "₹1,35,000",
//     oldPrice: "₹1,60,000",
//     months: "3 Months",
//     perLabel: "Per 3 Months",
//     features: [
//       "Customised Diet & Diet Plan",
//       "Gym Access without Any Charges",
//       "Weekly 5 Sessions",
//       "1 on 1 Training with Level 4 Certified Trainers",
//       "Weekly Progress Check-ins",
//       "Supplementation Guidance",
//       "Free Consultation with Venkat Sir After Joining",
//     ],
//   },
//   {
//     id: 7,
//     price: "₹2,55,000",
//     oldPrice: "₹2,80,000",
//     months: "6 Months",
//     perLabel: "Per 6 Months",
//     features: [
//       "Customised Diet & Diet Plan",
//       "Gym Access without Any Charges",
//       "Weekly 5 Sessions",
//       "1 on 1 Training with Level 4 Certified Trainers",
//       "Weekly Progress Check-ins",
//       "Supplementation Guidance",
//       "Free Consultation with Venkat Sir After Joining",
//     ],
//   },
// ];

// const cardBgByIndex = ["#005967", "#00424C", "#005967", "#00424C"];

// const getImageAlt = (url) => {
//   const fileName = url.split("/").pop() || "";
//   return fileName.replace(/\.(png|jpg|jpeg|webp)$/i, "").replace(/-/g, " ");
// };

// export default function TransformationPlans() {
//   const [tabValue, setTabValue] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const activePlans = useMemo(() => {
//     return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
//   }, [tabValue]);

//   const activePlanName =
//     tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

//   useEffect(() => {
//     setCurrentSlide(0);
//     if (sliderRef.current) {
//       sliderRef.current.scrollTo({
//         left: 0,
//         behavior: "smooth",
//       });
//     }
//   }, [tabValue]);

//   const handleApplyNow = (plan) => {
//     const phone = "919676146789";

//     const message = `I want to join Venkat Fitness Gym Hyderabad
// JOIN TODAY
// Plan: ${activePlanName}
// Duration: ${plan.months}`;

//     const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(whatsappURL, "_blank");
//   };

//   const scrollToSlide = (index) => {
//     if (!sliderRef.current) return;

//     const cards = sliderRef.current.querySelectorAll(".tp-mobile-card");
//     if (!cards[index]) return;

//     cards[index].scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//       block: "nearest",
//     });

//     setCurrentSlide(index);
//   };

//   const handlePrev = () => {
//     if (currentSlide > 0) {
//       scrollToSlide(currentSlide - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentSlide < activePlans.length - 1) {
//       scrollToSlide(currentSlide + 1);
//     }
//   };

//   const handleSliderScroll = () => {
//     if (!sliderRef.current) return;

//     const cards = sliderRef.current.querySelectorAll(".tp-mobile-card");
//     if (!cards.length) return;

//     const sliderLeft = sliderRef.current.getBoundingClientRect().left;

//     let nearestIndex = 0;
//     let nearestDistance = Infinity;

//     cards.forEach((card, index) => {
//       const rect = card.getBoundingClientRect();
//       const distance = Math.abs(rect.left - sliderLeft - 6);

//       if (distance < nearestDistance) {
//         nearestDistance = distance;
//         nearestIndex = index;
//       }
//     });

//     setCurrentSlide(nearestIndex);
//   };

//   const renderPlanCard = (plan, index, extraClass = "") => (
//     <Card
//       key={plan.id}
//       className={`tp-card ${
//         index === 0 ? "tp-card-first" : ""
//       } ${index === activePlans.length - 1 ? "tp-card-last" : ""} ${extraClass}`}
//       sx={{
//         backgroundColor: cardBgByIndex[index % cardBgByIndex.length],
//         backgroundImage: `url(${cardTexture})`,
//       }}
//     >
//       <CardContent className="tp-card-content">
//         <Box className="tp-top-price-row">
//           <Typography className="tp-main-price">{plan.price}</Typography>
//           <Typography className="tp-gst">+Gst</Typography>
//         </Box>

//         <Typography className="tp-old-price">{plan.oldPrice}</Typography>

//         <Box className="tp-dumbbell-row">
//           <img
//             src={dumbbellImages[index % dumbbellImages.length]}
//             alt={getImageAlt(dumbbellImages[index % dumbbellImages.length])}
//             className="tp-dumbbell-image"
//           />
//         </Box>

//         <Typography className="tp-per-label">{plan.perLabel}</Typography>

//         <Box className="tp-features-list">
//           {plan.features.map((feature) => (
//             <Box className="tp-feature-item" key={feature}>
//               <img
//                 src={featureIcon}
//                 alt={getImageAlt(featureIcon)}
//                 className="tp-feature-icon"
//               />
//               <span>{feature}</span>
//             </Box>
//           ))}
//         </Box>

//         <Button className="tp-apply-btn" onClick={() => handleApplyNow(plan)}>
//           Apply Now
//         </Button>

//         <img
//           src={humanBodyImages[index % humanBodyImages.length]}
//           alt={getImageAlt(humanBodyImages[index % humanBodyImages.length])}
//           className="tp-human-body"
//         />
//       </CardContent>
//     </Card>
//   );

//   return (
//     <Box
//       className="tp-section"
//       sx={{
//         backgroundImage: `linear-gradient(rgba(7,0,56,0.42), rgba(7,0,56,0.58)), url(${sectionBg})`,
//       }}
//     >
//       <Box className="tp-container">
//         <Typography className="tp-title">
//           Choose Your Transformation Plan
//         </Typography>

//         <Typography className="tp-subtitle">
//           This is not a gym. This is a transformation system
//         </Typography>

//         <Box className="tp-tabs-wrapper">
//           <Tabs
//             value={tabValue}
//             onChange={(_, newValue) => setTabValue(newValue)}
//             TabIndicatorProps={{ style: { display: "none" } }}
//             className="tp-tabs"
//           >
//             <Tab label="Personal Training" className="tp-tab" />
//             <Tab label="Premium Customized Plan" className="tp-tab" />
//           </Tabs>
//         </Box>

//         <Box className="tp-offer-brush-img">
//           <img
//             src={brushBg}
//             alt={getImageAlt(brushBg)}
//             className="tp-brush-bg"
//           />

//           <Box className="tp-brush-text">
//             <Typography className="tp-offer-small">
//               Special Offer on {activePlanName} Packages on the Occasion of
//             </Typography>

//             <Typography className="tp-offer-big">
//               4TH GYM ANNIVERSARY
//             </Typography>
//           </Box>
//         </Box>

//         <Box
//           className="tp-cards-grid"
//           sx={{
//             gridTemplateColumns: `repeat(${activePlans.length}, 1fr)`,
//             maxWidth: activePlans.length === 3 ? "960px" : "100%",
//             margin: "0 auto",
//           }}
//         >
//           {activePlans.map((plan, index) => renderPlanCard(plan, index))}
//         </Box>

//         <Box className="tp-slider-wrapper">
//           <Box
//             className="tp-slider"
//             ref={sliderRef}
//             onScroll={handleSliderScroll}
//           >
//             {activePlans.map((plan, index) => (
//               <Box key={plan.id} className="tp-mobile-card-wrapper">
//                 {renderPlanCard(plan, index, "tp-mobile-card")}
//               </Box>
//             ))}
//           </Box>

//           <Box className="tp-slider-controls">
//             <button
//               type="button"
//               className="tp-arrow"
//               onClick={handlePrev}
//               disabled={currentSlide === 0}
//               aria-label="Previous slide"
//             >
//               ‹
//             </button>

//             <Box className="tp-dots">
//               {activePlans.map((plan, index) => (
//                 <button
//                   key={plan.id}
//                   type="button"
//                   className={`tp-dot ${currentSlide === index ? "active" : ""}`}
//                   onClick={() => scrollToSlide(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </Box>

//             <button
//               type="button"
//               className="tp-arrow"
//               onClick={handleNext}
//               disabled={currentSlide === activePlans.length - 1}
//               aria-label="Next slide"
//             >
//               ›
//             </button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import "./TransformationPlans.css";

const sectionBg =
  "https://venketfitness.com/plans-images/jubliee-hills-gym.webp";
const cardTexture =
  "https://venketfitness.com/plans-images/best-gym-in-hyderabad.webp";
const brushBg =
  "https://venketfitness.com/plans-images/jubilee-hills-gym-hyderabad.png";
const featureIcon =
  "https://venketfitness.com/plans-images/hyderabad-gyms-near-me.png";

const dumbbellImages = [
  "https://venketfitness.com/plans-images/venkat-fitness-gym.png",
  "https://venketfitness.com/plans-images/venkat-fitness-trainer-cost.png",
  "https://venketfitness.com/plans-images/venkat-fitness-gym-price.png",
  "https://venketfitness.com/plans-images/venkat-fitness-online-training.png",
];

const humanBodyImages = [
  "https://venketfitness.com/plans-images/hyderabad-gyms.png",
  "https://venketfitness.com/plans-images/best-gyms-in-hyderabad.png",
  "https://venketfitness.com/plans-images/gyms-in-hyderabad-with-prices.png",
  "https://venketfitness.com/plans-images/hyderabad-gyms-with-fees.png",
];

const personalTrainingPlans = [
  {
    id: 1,
    price: "₹25,000",
    oldPrice: "₹30,000",
    months: "1 Month",
    perLabel: "Per 1 Month",
    features: [
      "Gym Access Without Any Charges",
      "Personalised Nutrition Plan",
      "Weekly 5 Sessions 1 on 1 Training",
      "Weekly Progress Check ins",
      "Supplementation Guidance",
    ],
  },
  {
    id: 2,
    price: "₹70,000",
    oldPrice: "₹84,000",
    months: "3 Months",
    perLabel: "Per 3 Months",
    features: [
      "Gym Access Without Any Charges",
      "Personalised Nutrition Plan",
      "Weekly 5 Sessions 1 on 1 Training",
      "Weekly Progress Check ins",
      "Supplementation Guidance",
    ],
  },
  {
    id: 3,
    price: "₹1,30,000",
    oldPrice: "₹1,56,000",
    months: "6 Months",
    perLabel: "Per 6 Months",
    features: [
      "Gym Access Without Any Charges",
      "Personalised Nutrition Plan",
      "Weekly 5 Sessions 1 on 1 Training",
      "Weekly Progress Check ins",
      "Supplementation Guidance",
    ],
  },
  {
    id: 4,
    price: "₹2,50,000",
    oldPrice: "₹2,88,000",
    months: "12 Months",
    perLabel: "Per 12 Months",
    features: [
      "Gym Access Without Any Charges",
      "Personalised Nutrition Plan",
      "Weekly 5 Sessions 1 on 1 Training",
      "Weekly Progress Check ins",
      "Supplementation Guidance",
    ],
  },
];

const premiumCustomizedPlans = [
  {
    id: 5,
    price: "₹50,000",
    oldPrice: "₹60,000",
    months: "1 Month",
    perLabel: "Per 1 Month",
    features: [
      "Customised Diet & Diet Plan",
      "Gym Access without Any Charges",
      "Weekly 5 Sessions",
      "1 on 1 Training with Level 4 Certified Trainers",
      "Weekly Progress Check ins",
      "Supplementation Guidance",
      "Free Consultation with Venkat Sir After Joining",
    ],
  },
  {
    id: 6,
    price: "₹1,35,000",
    oldPrice: "₹1,60,000",
    months: "3 Months",
    perLabel: "Per 3 Months",
    features: [
      "Customised Diet & Diet Plan",
      "Gym Access without Any Charges",
      "Weekly 5 Sessions",
      "1 on 1 Training with Level 4 Certified Trainers",
      "Weekly Progress Check ins",
      "Supplementation Guidance",
      "Free Consultation with Venkat Sir After Joining",
    ],
  },
  {
    id: 7,
    price: "₹2,55,000",
    oldPrice: "₹2,80,000",
    months: "6 Months",
    perLabel: "Per 6 Months",
    features: [
      "Customised Diet & Diet Plan",
      "Gym Access without Any Charges",
      "Weekly 5 Sessions",
      "1 on 1 Training with Level 4 Certified Trainers",
      "Weekly Progress Check ins",
      "Supplementation Guidance",
      "Free Consultation with Venkat Sir After Joining",
    ],
  },
];

const cardBgByIndex = ["#006c79", "#005762", "#006c79", "#005762"];

const getImageAlt = (url) => {
  const fileName = url.split("/").pop() || "";
  return fileName.replace(/\.(png|jpg|jpeg|webp)$/i, "").replace(/-/g, " ");
};

export default function TransformationPlans() {
  const [tabValue, setTabValue] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const activePlans = useMemo(() => {
    return tabValue === 0 ? personalTrainingPlans : premiumCustomizedPlans;
  }, [tabValue]);

  const activePlanName =
    tabValue === 0 ? "Personal Training" : "Premium Customized Plan";

  useEffect(() => {
    setCurrentSlide(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [tabValue]);

  const handleApplyNow = (plan) => {
    const phone = "919676146789";
    const message = `I want to join Venkat Fitness Gym Hyderabad
JOIN TODAY
Plan: ${activePlanName}
Duration: ${plan.months}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollToSlide = (index) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.querySelectorAll(".tp-mobile-card");
    if (!cards[index]) return;

    cards[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setCurrentSlide(index);
  };

  const handlePrev = () => {
    if (currentSlide > 0) scrollToSlide(currentSlide - 1);
  };

  const handleNext = () => {
    if (currentSlide < activePlans.length - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const handleSliderScroll = () => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.querySelectorAll(".tp-mobile-card");
    if (!cards.length) return;

    const containerRect = sliderRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setCurrentSlide(nearestIndex);
  };

  const renderPlanCard = (plan, index, extraClass = "") => (
    <Card
      key={plan.id}
      className={`tp-card ${
        index === 0 ? "tp-card-first" : ""
      } ${index === activePlans.length - 1 ? "tp-card-last" : ""} ${extraClass}`}
      sx={{
        backgroundColor: cardBgByIndex[index % cardBgByIndex.length],
        backgroundImage: `url(${cardTexture})`,
      }}
    >
      <CardContent className="tp-card-content">
        <Box className="tp-top-price-row">
          <Typography className="tp-main-price">{plan.price}</Typography>
          <Typography className="tp-gst">+Gst</Typography>
        </Box>

        <Typography className="tp-old-price">{plan.oldPrice}</Typography>

        <Box className="tp-dumbbell-row">
          <img
            src={dumbbellImages[index % dumbbellImages.length]}
            alt={getImageAlt(dumbbellImages[index % dumbbellImages.length])}
            className="tp-dumbbell-image"
          />
        </Box>

        <Typography className="tp-per-label">{plan.perLabel}</Typography>

        <Box className="tp-features-list">
          {plan.features.map((feature) => (
            <Box className="tp-feature-item" key={feature}>
              <img
                src={featureIcon}
                alt={getImageAlt(featureIcon)}
                className="tp-feature-icon"
              />
              <span>{feature}</span>
            </Box>
          ))}
        </Box>

        <Button className="tp-apply-btn" onClick={() => handleApplyNow(plan)}>
          JOIN TODAY
        </Button>

        <img
          src={humanBodyImages[index % humanBodyImages.length]}
          alt={getImageAlt(humanBodyImages[index % humanBodyImages.length])}
          className="tp-human-body"
        />
      </CardContent>
    </Card>
  );

  return (
    <Box
      className="tp-section"
      sx={{
        backgroundImage: `linear-gradient(rgba(7,0,56,0.62), rgba(7,0,56,0.75)), url(${sectionBg})`,
      }}
    >
      <Box className="tp-container">
        <Typography className="tp-title">
          Choose Your Transformation Plan
        </Typography>

        <Typography className="tp-subtitle">
          This is not a gym. This is a transformation system
        </Typography>

        <Box className="tp-tabs-wrapper">
          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            TabIndicatorProps={{ style: { display: "none" } }}
            className="tp-tabs"
          >
            <Tab label="Personal Training" className="tp-tab" />
            <Tab label="Premium Customized Plan" className="tp-tab" />
          </Tabs>
        </Box>

        <Box className="tp-offer-brush-img">
          <img
            src={brushBg}
            alt={getImageAlt(brushBg)}
            className="tp-brush-bg"
          />

          <Box className="tp-brush-text">
            <Typography className="tp-offer-small">
              Special Offer on {activePlanName} Packages on the Occasion of
            </Typography>

            <Typography className="tp-offer-big">
              4TH GYM ANNIVERSARY
            </Typography>
          </Box>
        </Box>

        <Box
          className="tp-cards-grid"
          sx={{
            gridTemplateColumns: `repeat(${activePlans.length}, 1fr)`,
            maxWidth: activePlans.length === 3 ? "960px" : "100%",
            margin: "0 auto",
          }}
        >
          {activePlans.map((plan, index) => renderPlanCard(plan, index))}
        </Box>

        <Box className="tp-slider-wrapper">
          <Box
            className="tp-slider"
            ref={sliderRef}
            onScroll={handleSliderScroll}
          >
            {activePlans.map((plan, index) => (
              <Box key={plan.id} className="tp-mobile-card-wrapper">
                {renderPlanCard(plan, index, "tp-mobile-card")}
              </Box>
            ))}
          </Box>

          <Box className="tp-slider-controls">
            <button
              type="button"
              className="tp-arrow"
              onClick={handlePrev}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <Box className="tp-dots">
              {activePlans.map((plan, index) => (
                <button
                  key={plan.id}
                  type="button"
                  className={`tp-dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => scrollToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </Box>

            <button
              type="button"
              className="tp-arrow"
              onClick={handleNext}
              disabled={currentSlide === activePlans.length - 1}
              aria-label="Next slide"
            >
              ›
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}