import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const catogry = [
  "Full Stack Developer",
  "Frontend Developer",
  "Data Science",
  "Graphic Designer",
  "UI Designer",
  "Backend Developer",
  "DevOps Engineer",
  "Mobile App Developer",
  "Cybersecurity Specialist",
  "Cloud Architect",
  "AI/ML Engineer",
  "Blockchain Developer",
  "Database Administrator",
  "Game Developer",
  "Technical Writer",
];

function CategoryCarousel() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Carousel className="w-full mx-auto my-14 max-w-xl">
        <CarouselContent>
          {catogry.map((cat, i) => (
            <CarouselItem  className="pl-2 md:basis-1/2 lg:basis-1/3" key={i}>
              <Button variant="outline">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
