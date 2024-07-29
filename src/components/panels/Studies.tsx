import {CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import data from '@/data.json'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Study from '../singles/Study'

function Studies() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="w-full md:w-3/5 2xl:w-2/5 mx-auto xl:mb-4">
      <CardHeader className="text-center w-full m-auto">
        <CardTitle className="uppercase">Education</CardTitle>
      </CardHeader>
      <CardContent className="w-full m-auto grid grid-cols-2 gap-2 md:gap-2 md:grid-cols-2 justify-evenly">
        {data.studies.map(study => (
          <Study key={study.name} study={study} />
        ))}
      </CardContent>
    </div>
  )
}

export default Studies
