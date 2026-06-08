import Process from "../../components/Process";

export default function ProcessSection() {
  return (
    <div className="reverse-portfiolio-hero min-h-screen w-full flex flex-col items-center justify-center px-8 py-16">
      <h3 className="text-4xl md:text-6xl text-center mb-12">My Process</h3>
      <div className="flex flex-col md:flex-row gap-5 justify-around">
        <Process number={1} name="Research" description="Understanding the brief, target audience and market landscape." />
        <Process number={2} name="Sketch" description="Mind mapping and rough sketching of conceptual directions." />
        <Process number={3} name="Design" description="Translating ideas into polished digital executions." />
        <Process number={4} name="Delivery" description="Refining based on feedback for the perfect final outcome" />
      </div>
    </div>
  );
}
