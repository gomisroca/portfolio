import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import data from '@/data.json'

function Banner() {
    return (
        <div>
            <Avatar className="h-1/2 w-1/2 md:h-1/6 md:w-1/6 m-auto border-2 hover:border-emerald-300 dark:hover:border-emerald-600 hover:contrast-[1.1] transition duration-200">
                <AvatarImage src={data.banner.image} alt="avatar" />
                <AvatarFallback>AG</AvatarFallback>
            </Avatar>
            <Card className="border-none m-auto">
                <CardHeader className="text-center w-full md:w-1/6 m-auto">
                    <CardTitle className="font-mw">Adrià Gomis</CardTitle>
                    <CardDescription>Full-stack Developer</CardDescription>
                </CardHeader>
                <CardContent className="w-full md:w-1/2 m-auto grid gap-y-2" dangerouslySetInnerHTML={{__html: data.banner.introduction}} />
            </Card>
        </div>
    )
}

export default Banner