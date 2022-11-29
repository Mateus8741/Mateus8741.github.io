import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
      <Accordion>
        {props.sections.map((section) => {
          return (
            // <Panel
            //   className="accord-panel"
            //   title={section["title"]}
            //   key={section["title"]}
            // >
            // </Panel>
            section["experiences"].map((experience) => {
              return (
                <div className="experience-accord">
                  <ExperienceCard experience={experience} theme={theme} />
                </div>
              );
            })
          );
        })}
      </Accordion>
    </ThemeProvider>
  );
}

export default ExperienceAccordion;
