import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuAccordion = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="ml-[100px] flex flex-col mt-[200px] mb-[100px]">
      <div className="flex flex-col gap-1 items-center mb-[100px] ">
        <p className="font-bold text-[20px]">FAQ</p>
        <p className="font-bold text-[30px]">Frequently Asked Questions</p>
        <p className="text-[12px]">
          Frequently asked Questions About the Car Rental Booking Process on Our
          Website Answers to
        </p>
        <p className="text-center mt-[-4px] text-[12px]">
          Common Concerns and inquiries
        </p>
      </div>
      <div className=" w-[800px] ml-[500px]">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: expanded === "panel1" ? "#ff0000" : "#ffffff",
              color: expanded === "panel1" ? "#ffffff" : "rgb(19, 17, 17)",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>
              1. What is special about comparing rental car deals
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#ffffff" }}>
            <Typography>
              Comparing rental car deals is important as it helps find that fits
              your budget and requirements, ensuring you get the most value for
              your money. You can find deals that offer lower prices, additional
              services, or better car models. By comparing various options...
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: expanded === "panel2" ? "#ff0000" : "#ffffff",
              color: expanded === "panel2" ? "#ffffff" : "rgb(19, 17, 17)",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>
              2. How can I make a reservation for a rental car?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#ffffff" }}>
            <Typography>
              You can find car rental deals by researching online and comparing
              prices from different rental companies. websites such as Expedia.
              Kayak and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletter and follow rental car companies on social media
              to be informed of my deals or promotions
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: expanded === "panel3" ? "#ff0000" : "#ffffff",
              color: expanded === "panel3" ? "#ffffff" : "rgb(19, 17, 17)",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>
              2. How can I make a reservation for a rental car?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#ffffff" }}>
            <Typography>
              Book in advance .Booking your rental car ahead of time can often
              result in lower prices Compare prices from multiple companies. Use
              websiteslike Kalayk Expedia or travelocity to compare prices from
              multiple rental car companies. Look for discount codes and
              coupens.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Add more Accordions as needed... */}
      </div>
    </div>
  );
};

export default MuAccordion;
