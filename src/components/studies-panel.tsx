import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import data from '@/data.json'
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react"
import Study from "./singles/study"

function StudiesPanel(){
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Card className="border-2 has-[.aos-init:hover]:border-neutral-200 dark:has-[.aos-init:hover]:border-neutral-800 md:hover:border-emerald-300 md:dark:hover:border-emerald-600 transition duration-200 m-auto w-[90%] md:w-1/2">
            <CardHeader className="text-center w-full m-auto">
                <CardTitle className="capitalize font-mw">Education</CardTitle>
            </CardHeader>
            <CardContent className="w-full m-auto grid grid-cols-2 gap-y-4 md:gap-2 md:grid-cols-2 justify-evenly">
                {data.studies.map(study => (
                    <Study study={study} />
                ))}
            </CardContent>
        </Card>
    )
}

export default StudiesPanel