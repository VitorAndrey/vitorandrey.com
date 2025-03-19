import { BadgeCheckIcon } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="section snap-center">
      <h2 className="text-3xl font-bold text-center pb-2">Skills</h2>
      <h3 className="text-muted-foreground text-center opacity-80 pb-10">
        Technical Stack
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl border shadow-sm">
          <h3 className="text-lg font-semibold pb-4 text-center">
            Front-end Developer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <SkillItem skill="HTML" />
            <SkillItem skill="CSS" />
            <SkillItem skill="JavaScript" />
            <SkillItem skill="TypeScript" />
            <SkillItem skill="React.js" />
            <SkillItem skill="Next.js" />
          </div>
        </div>

        <div className="p-6 rounded-xl border shadow-sm hidden md:block">
          <h3 className="text-lg font-semibold pb-4 text-center ">
            Back-end Developer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <SkillItem skill="Node.js" />
            <SkillItem skill="Express.js" />
            <SkillItem skill="Nest.js" />
            <SkillItem skill="PostgreSQL" />
            <SkillItem skill="MongoDB" />
            <SkillItem skill="Prisma" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill }: { skill: string }) {
  return (
    <div className="flex items-center gap-2 px-2 md:py-2 rounded-lg truncate">
      <BadgeCheckIcon size={20} fill="#111" className="text-white" />
      <h3 className="text-sm">{skill}</h3>
    </div>
  );
}
