import { useState } from "react";
import { motion } from "framer-motion";
import { Beaker, Microscope, Shield, CheckCircle, Factory } from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";

// Manufacturing page with process flow and facilities overview.
function ManufacturingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const processSteps = [
    { icon: Beaker, title: "Research", description: "Innovative drug discovery and formulation development" },
    { icon: Microscope, title: "Development", description: "Clinical trials and regulatory compliance" },
    { icon: Shield, title: "Testing", description: "Quality assurance and stability studies" },
    { icon: Factory, title: "Production", description: "State-of-the-art manufacturing facilities" },
    { icon: CheckCircle, title: "Quality Check", description: "Final verification and certification" },
  ];

  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2"><span className="font-medium text-[#0A66C2]">Manufacturing Excellence</span></div>
            <h1 className="text-5xl font-bold text-gray-900 md:text-6xl">World-Class <span className="text-[#0A66C2]">Manufacturing</span></h1>
            <p className="text-xl leading-relaxed text-gray-600">State-of-the-art facilities combining cutting-edge technology with stringent quality controls to deliver pharmaceutical excellence.</p>
          </div>
          <ImageWithFallback src="https://images.unsplash.com/photo-1757578097654-fdae0f7cf008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3NDQ5NzI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Manufacturing Facility" className="h-[500px] w-full rounded-2xl object-cover shadow-2xl" />
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} onHoverStart={() => setActiveStep(index)} className={`rounded-xl bg-white p-6 text-center shadow-md transition-all ${activeStep === index ? "ring-2 ring-[#0A66C2]" : ""}`}>
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${activeStep === index ? "bg-gradient-to-br from-[#0A66C2] to-[#0856a8]" : "bg-gray-100"}`}>
                    <Icon className={activeStep === index ? "text-white" : "text-gray-600"} size={28} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ManufacturingPage;
