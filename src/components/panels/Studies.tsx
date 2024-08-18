import { CardContent, CardHeader, CardTitle } from '../ui/card';
import data from '../../data.json';
import Study from '../singles/Study';

function Studies() {
  return (
    <div className="mx-auto w-full md:w-3/5 xl:mb-4 2xl:w-2/5">
      <CardHeader className="m-auto w-full py-2 text-center">
        <CardTitle className="uppercase">Education</CardTitle>
      </CardHeader>
      <CardContent className="m-auto grid w-full grid-cols-2 justify-evenly gap-1 px-2 md:grid-cols-2 md:gap-2 md:px-0">
        {data.studies.map((study) => (
          <Study key={study.name} study={study} />
        ))}
      </CardContent>
    </div>
  );
}

export default Studies;
