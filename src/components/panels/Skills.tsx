import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
    <Card className="border-2 md:hover:border-emerald-300 md:dark:hover:border-emerald-600 transition duration-200 my-auto mx-2 md:mx-auto w-auto md:w-3/4 xl:w-5/6">
      <CardHeader className="text-center w-full m-auto">
        <CardTitle className="capitalize font-mw">Skills</CardTitle>
      </CardHeader>
      <CardContent className="w-full m-auto grid grid-cols-2 gap-y-4 xl:gap-0 xl:grid-cols-4">
        {data.skills.map((skill: SkillType) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </CardContent>
    </Card>
  )
}

export default Skills
