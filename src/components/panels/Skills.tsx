import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import data from '@/data.json'
import Skill from '@/components/singles/Skill'

type Content = {
  name: string;
  badge: string;
  specialized?: boolean;
};

type SkillType = {
  name: string;
  content: Content[];
};

function Skills() {
  return (
    <div className="w-full md:w-3/5 2xl:w-2/5 mx-auto lg:mb-4">
      <CardHeader className="text-center w-full m-auto py-2">
        <CardTitle className="uppercase">Skills</CardTitle>
      </CardHeader>
      <CardContent className="w-full m-auto grid grid-cols-2 gap-y-4 xl:gap-0 xl:grid-cols-4 py-2">
        {data.skills.map((skill: SkillType) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </CardContent>
    </div>
  )
}

export default Skills
