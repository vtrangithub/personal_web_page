import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008-2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bellevue College
          </h3>
          <p> AS in Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Washington
          </h3>
          <p> BS in Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nucamp Bootcamp
          </h3>
          <p> Full Stack Web Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="In Progress"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Washington
          </h3>
          <p> Full Stack Web Development with Javascript</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021-current"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lab Lead and  Engineering Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Siemens Medical Inc.
          </h4>
          <ul>
            <li>Lead role managing and supervising all operations of the AOP lab, while performing and maintaining calibrations of laboratory equipment. Works closely with ultrasound engineers to conduct various ultrasound acoustic power measurements.</li>
          </ul>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            R and D Integration Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Blue Origin LLC ,Kent, WA
          </h4>
          <ul>
            <li>Lead role in ensuring and maintaining integration and testing, functional verification, and troubleshooting of propulsion systems and components. Performed multiple material tests on propulsion system team as per requests and instructions provided by engineers.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Aircraft Test Tech A
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Boeing ,Renton, WA
          </h4>
          <ul>
            <li>Expertly performed and ensured testing, troubleshooting and repairing of all mechanical and electrical systems on aircraft prior to flight tests. Revitalized multiple systems, executing a range of functional tests as per drawings, test documents, nonconformance reports and other documents to verify integrity of the systems.</li>
          </ul>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015-2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FAA Avionics Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Honeywell ,Renton, WA
          </h4>
          <ul>
            <li>Attained certification as technician and quality inspector for avionic devices, while troubleshooting, inspecting, repairing, overhauling, testing, modifying, and maintaining the Radar Transceiver. </li>
          </ul>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
