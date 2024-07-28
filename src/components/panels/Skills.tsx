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
    <Card className="border-2  md:hover:border-emerald-300 md:dark:hover:border-emerald-600 transition duration-200 m-auto w-[90%] md:w-1/2">
      <CardHeader className="text-center w-full m-auto">
        <CardTitle className="capitalize font-mw">Skills</CardTitle>
      </CardHeader>
      <CardContent className="w-full m-auto grid grid-cols-2 gap-y-4 md:gap-0 md:grid-cols-4 justify-evenly">
        {data.skills.map((skill: SkillType) => (
          <Skill skill={skill} />
        ))}
      </CardContent>
    </Card>
  )
}

export default Skills
