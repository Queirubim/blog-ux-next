import { Image } from '@nextui-org/react';

import { Section } from 'app/components/Section';

export const Description = () => {
  const skills = [
    'Extensive experience in UI design, with a strong portfolio of completed projects',
    'Proficiency in design tools such as Adobe Creative Suite and Sketch',
    'Excellent visual design skills, with a strong understanding of layout, color theory, and typography',
    'Ability to create wireframes and prototypes to communicate design concepts',
    'Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams',
    'Experience conducting user research and gathering insights to inform design decisions',
    'Proficiency in HTML, CSS, and JavaScript',
  ];
  const experiences = [
    '5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries',
    'Led the design of a successful e-commerce website, resulting in a 25% increase in online sales',
    'Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage',
    "Conducted user research and usability testing to inform the redesign of a healthcare provider's website,resulting in a 15% increase in website traffic",
  ];

  const educations = [
    "Bachelor's degree in Graphic Design",
    'Certified User Experience Designer (CUED)',
  ];
  return (
    <Section>
      <Image
        radius="none"
        alt="algo123"
        width={'100%'}
        src="/Allan.jpeg"
        className="max-h-[556px] object-cover"
      />
      <div>
        <h2 className="font-semibold text-xl mt-10 mb-3">About Me</h2>
        <p>
          As a passionate and experienced UI designer, I am dedicated to
          creating intuitive and engaging user experiences that meet the needs
          of my clients and their users. I have a strong understanding of design
          principles and a proficiency in design tools, and I am comfortable
          working with cross-functional teams to bring projects to fruition. I
          am confident in my ability to create designs that are both visually
          appealing and functional, and I am always looking for new challenges
          and opportunities to grow as a designer.
        </p>
        <h2 className="font-semibold text-xl mt-8 mb-3">Skills:</h2>
        <ul className="list-disc list-inside flex flex-col gap-1">
          {skills.map((skill, i) => (
            <li key={`${i}-skl`}>{skill}</li>
          ))}
        </ul>
        <h2 className="font-semibold text-xl mt-8 mb-3">Experience:</h2>
        <ul className="list-disc list-inside flex flex-col gap-1">
          {experiences.map((experience, i) => (
            <li key={`${i}-exp`}>{experience}</li>
          ))}
        </ul>
        <h2 className="font-semibold text-xl mt-8 mb-3">Education:</h2>
        <ul className="list-disc list-inside flex flex-col gap-1">
          {educations.map((education, i) => (
            <li key={`${i}-edu`}>{education}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
