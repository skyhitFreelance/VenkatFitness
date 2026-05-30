import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

  const handleSliderScroll = useCallback(() => {
    if (!sliderRef.current || window.requestAnimationFramePending) return;

    window.requestAnimationFramePending = true;
    requestAnimationFrame(() => {
      if (!sliderRef.current) {
        window.requestAnimationFramePending = false;
        return;
      }
      
      const cards = sliderRef.current.querySelectorAll(".tp-mobile-card");
      if (!cards.length) {
        window.requestAnimationFramePending = false;
        return;
      }

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
      window.requestAnimationFramePending = false;
    });
  }, [activePlans.length]);

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
            width="272"
            height="51"
            loading="lazy"
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
                width="10"
                height="10"
                loading="lazy"
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
          width="55"
          height="89"
          loading="lazy"
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
            width="400"
            height="60"
            loading="lazy"
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