import SafeClient from './safe-client';
import { Card } from '@/components/ui/card';

const skills = [
  {
    category: 'FRONTEND',
    technologies: [
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Next.js', icon: <NextjsIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
      { name: 'TypeScript', icon: <TypescriptIcon /> },
    ],
  },
  {
    category: 'BACKEND',
    technologies: [
      { name: 'Node.js', icon: <NodejsIcon /> },
      { name: 'Firebase', icon: <FirebaseIcon /> },
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'Express', icon: <ExpressIcon /> },
    ],
  },
  {
    category: 'AI/ML',
    technologies: [
      { name: 'Genkit', icon: <GenkitIcon /> },
      { name: 'TensorFlow', icon: <TensorflowIcon /> },
      { name: 'PyTorch', icon: <PytorchIcon /> },
      { name: 'Scikit-learn', icon: <ScikitLearnIcon /> },
    ],
  },
  {
    category: 'TOOLS',
    technologies: [
      { name: 'Git', icon: <GitIcon /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'Figma', icon: <FigmaIcon /> },
      { name: 'Webpack', icon: <WebpackIcon /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          MY SKILLS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory) => (
            <Card
              key={skillCategory.category}
              className="bg-white/10 backdrop-blur-md p-6 shadow-lg rounded-2xl transform transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-center font-headline font-bold text-xl mb-6">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {skillCategory.technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center justify-center gap-2">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <SafeClient>{tech.icon}</SafeClient>
                    </div>
                    <p className="font-headline font-semibold text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// SVG Icon Components

function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12 text-blue-400">
      <SafeClient>
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
      </SafeClient>
    </svg>
  );
}

function NextjsIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-14 h-14">
      <SafeClient>
      <circle cx="64" cy="64" r="64" fill="black" />
      <path
        d="M101.95 40.82L64 102.68L26.05 40.82H45.89L64 64.92L82.11 40.82H101.95Z"
        fill="white"
      />
      <path
        d="M87 40.82H99V87.18H87V40.82Z"
        fill="white"
      />
      </SafeClient>
    </svg>
  );
}

function TailwindCssIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-14 h-14">
      <SafeClient>
      <path
        fill="#38bdf8"
        d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16s16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14z"
      />
      <path
        fill="#38bdf8"
        d="M20.323 11.25c-2.315-2.315-6.109-2.28-8.414 0c-1.554 1.554-2.13 3.993-1.549 5.867l-5.11 5.11a.997.997 0 0 0 0 1.414c.391.391 1.023.391 1.414 0l5.11-5.11c1.874.581 4.313 0 5.867-1.549c2.305-2.305 2.315-6.109 0-8.414zm-1.414 7c-1.545 1.545-4.049 1.564-5.586.019l.02-.02l5.586-5.586a3.997 3.997 0 0 1-.02 5.587zM11.677 18.75c2.315 2.315 6.109 2.28 8.414 0c1.554-1.554 2.13-3.993 1.549-5.867l5.11-5.11a.997.997 0 0 0 0-1.414c-.391-.391-1.023-.391-1.414 0l-5.11 5.11c-1.874-.581-4.313 0-5.867 1.549c-2.305 2.305-2.315 6.109 0 8.414zm1.414-7c1.545-1.545 4.049-1.564 5.586-.019l-.02.02l-5.586 5.586a3.997 3.997 0 0 1 .02-5.587z"
      />
      </SafeClient>
    </svg>
  );
}

function TypescriptIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient>
            <path fill="#3178c6" d="M0 0h24v24H0V0z"/>
            <path fill="white" d="M11.5 13.9h-1.4V8.4H8.7v-1.3h4.2v1.3h-1.4v5.5zm4.8-5.3v1.2h2.2v1.1h-2.2v1.3h2.4v1.2h-3.8V8.4h3.7v1.2h-2.3z"/>
            </SafeClient>
        </svg>
    );
}

function NodejsIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
            <SafeClient><path fill="#68a063" d="M11.99 24C5.38 24 0 18.62 0 12S5.38 0 11.99 0C18.6 0 24 5.38 24 12s-5.4 12-12.01 12zM12 1.34C6.12 1.34 1.35 6.12 1.35 12c0 5.89 4.77 10.66 10.65 10.66c5.89 0 10.65-4.77 10.65-10.66C22.65 6.12 17.89 1.34 12 1.34zM11.57 5.2v2.25l-2.82.9c-.31.1-.3.26 0 .33l2.82.9v2.24c0 .24-.26.34-.43.16l-3.95-3.6c-.14-.14-.14-.38 0-.52l3.95-3.6c.17-.18.43-.08.43.16zm.86 0c.17-.24.43-.14.43.16l-1.02 9.07c0 .2-.16.3-.32.2l-1.42-.88c-.14-.1-.13-.26 0-.33l2.33-8.22zm2.14 7.63l2.82-.9c.31-.1.3-.26 0-.33l-2.82-.9V9.36c0-.24.26-.34.43-.16l3.95 3.6c.14.14.14.38 0 .52l-3.95 3.6c-.17.18-.43.08-.43-.16V12.83z"/></SafeClient>
        </svg>
    )
}

function FirebaseIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient>
            <path fill="#ffca28" d="M4.33 20.35l11.49-14.8-3.01-6.55-12.81 18.1zm14.13-3.14L7.5 3.25l3.23-3.25 10.74 15.3-3.01 4.94z"/>
            <path fill="#f57c00" d="m18.46 17.21l-7.95-13.96L7.5 3.25l10.96 13.96z"/>
            <path fill="#ffa000" d="M4.33 20.35L15.82 5.55l-3.23 3.23L4.33 20.35z"/>
            </SafeClient>
        </svg>
    )
}

function PythonIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
            <SafeClient>
            <path fill="#3776ab" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
            <path fill="#ffd343" d="M12 17.3c-2.4 0-4-1.6-4-3.6V12h2.5v1.8c0 .8.5 1.5 1.5 1.5s1.5-.7 1.5-1.5V6.7c0-2.4-1.6-3.6-4-3.6H8v2.5h1.9c.8 0 1.5.4 1.5 1.5v.3H8V12h3.4c2.4 0 4 1.6 4 3.7 0 2.1-1.6 3.6-4 3.6zm0-11c.8 0 1.5.5 1.5 1.5v1.8H12v-1.8c0-1-.7-1.5-1.5-1.5S9 5.8 9 6.7v1.8h1.5V6.7c0-.8.5-1.5 1.5-1.5z"/>
            </SafeClient>
        </svg>
    )
}

function ExpressIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
            <SafeClient>
            <path d="M22.5 17.9H1.5c-.8 0-1.5-.7-1.5-1.5V7.6c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v8.8c0 .8-.7 1.5-1.5 1.5zM2 16.4h20V8.1H2v8.3z" fill="#000000"/>
            <path d="M4.4 11.2c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.4c.3 0 .6.3.6.6s-.3.6-.6.6H4.4zm10.7-3.3c.3 0 .5.2.6.5l.2.8.2.8c.1.3-.1.6-.4.7s-.6-.1-.7-.4l-.2-.8-.2-.8c-.1-.3.1-.6.4-.7zm-1.8 1.9c.3 0 .6-.3.6-.6s-.3-.6-.6-.6h-3.4c-.3 0-.6.3-.6.6s.3.6.6.6h3.4zm1.9-2.3c-.3 0-.6.3-.6.6s.3.6.6.6h3.4c.3 0 .6-.3.6-.6s-.3-.6-.6-.6h-3.4zm1.2 5c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.4c.3 0 .6.3.6.6s-.3.6-.6-.6h-3.4zm-9.3-1c.2-.2.5-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7s.1-.5.3-.7zm0-2.3c.2-.2.5-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7s.1-.5.3-.7z" fill="#000000"/>
            </SafeClient>
        </svg>
    )
}

function GenkitIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient>
            <path fill="none" stroke="#f08c28" strokeWidth="1.5" d="M12 21.5l-9-5.19V7.69l9-5.19l9 5.19v7.62l-9 5.19z"/>
            <path fill="#f08c28" d="M7 11.5h10v1H7z"/>
            </SafeClient>
        </svg>
    )
}

function TensorflowIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient><path fill="#ff6f00" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 15v-2h2v2zm-2-4l-1.42-1.41L12 13.17l-1.42-1.41L9.17 13l2.83 2.83zm4-3.17L12 6.83l-2.83 2.83L7.76 8.24L12 4l4.24 4.24z"/></SafeClient>
        </svg>
    )
}

function PytorchIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient>
            <path fill="#ee4c2c" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1.29 15.17c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l1.63-1.63c.2-.2.45-.29.71-.29s.51.1.71.29l1.63 1.63c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.58l-1.29 1.59zm-3.6-3.6c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l1.63-1.63c.2-.2.45-.29.71-.29s.51.1.71.29l1.63 1.63c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-1.3-1.3l-1.29 1.3zm8.6-3.6c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l1.63-1.63c.2-.2.45-.29.71-.29s.51.1.71.29l1.63 1.63c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-1.3-1.3l-1.29 1.3z"/>
            <path fill="#ee4c2c" d="M7 6h10v2H7z"/>
            </SafeClient>
        </svg>
    )
}

function ScikitLearnIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient>
            <path fill="#f7931e" d="M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0z"/>
            <path fill="#39a9dd" d="M18 5.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 1 1 7 0z"/>
            <path d="M16 19a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0z" fill="#000" opacity=".2"/>
            </SafeClient>
        </svg>
    )
}

function GitIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient>
            <path fill="#f05033" d="M22.5 10.15L13.85 1.5l-2.3 2.3l4.5 4.5c.6.6.6 1.55 0 2.15l-3.35 3.35c-.4.4-.95.6-1.5.6s-1.1-.2-1.5-.6L5.15 9.4l-2.3 2.3l8.65 8.65c.85.85 2.2.85 3.05 0l7.95-7.95c.85-.85.85-2.2 0-3.05zM9.4 11.25c.4-.4.95-.6 1.5-.6s1.1.2 1.5.6l3.35-3.35c.6-.6.6-1.55 0-2.15L11.25 1.2c-.4-.4-.95-.6-1.5-.6s-1.1.2-1.5.6L1.5 8.05c-.85.85-.85 2.2 0 3.05l7.9 7.9z"/>
            <circle fill="#f05033" cx="5.15" cy="11.75" r="2.6"/>
            <circle fill="#f05033" cx="11.15" cy="5.75" r="2.6"/>
            <circle fill="#f05033" cx="11.15" cy="17.75" r="2.6"/>
            </SafeClient>
        </svg>
    )
}

function DockerIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient><path fill="#2496ed" d="M22.42 8.9c-.3-1.63-1.55-3.23-2.8-4.14-1.2-1.02-3.8-2.2-6.52-2.35-.38 0-.76.08-1.12.2-1.9.46-3.23 1.6-4.22 3.1-.73 1.12-1.1 2.4-1.18 3.7-.1 1.76.5 4.44 2.03 5.86.3.28.64.53.98.76.6.4 1.28.72 2 .95.73.23 1.5.34 2.27.34.8 0 1.58-.12 2.34-.36.75-.24 1.45-.56 2.08-.95.32-.2.62-.43.9-.68 1.45-1.3 2.22-3.82 2.22-5.43zm-11.47.88H8.7v-2.2h2.25v2.2zm0-3.32H8.7v-2.2h2.25v2.2zm3.32 3.32h-2.2v-2.2h2.2v2.2zm0-3.32h-2.2v-2.2h2.2v2.2zm3.33 3.32h-2.2v-2.2h2.2v2.2zm0-3.32h-2.2v-2.2h2.2v2.2zm3.32 0h-2.2v-2.2h2.2v2.2zM4.9 14.5c-1.3-1.4-1.53-3.48-1.53-4.15 0-.15.02-.3.04-.45.05-1.1.4-2.2 1-3.14.74-1.14 1.83-2.03 3.2-2.4.24-.07.48-.1.7-.1.08 0 .15.02.23.03.1.02.2.04.3.06 2.3.56 2.84 2.9 2.84 2.9h-6.7v7.25c-.75-.1-1.5-.42-2.08-.9z"/></SafeClient>
        </svg>
    )
}

function FigmaIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
            <SafeClient>
            <path fill="#f24e1e" d="M7.5 22.5A3.5 3.5 0 0 1 4 19V12h3.5v7a3.5 3.5 0 0 0 3.5 3.5h.5a3.5 3.5 0 0 0 3.5-3.5v-7h3.5v7a3.5 3.5 0 0 1-3.5 3.5h-4z"/>
            <path fill="#ff7262" d="M7.5 15A3.5 3.5 0 0 1 4 11.5v-8A3.5 3.5 0 0 1 7.5 0h.5a3.5 3.5 0 0 1 3.5 3.5v4h-7v4A3.5 3.5 0 0 0 8 15h-.5z"/>
            <path fill="#a259ff" d="M7.5 8h4a3.5 3.5 0 0 0 3.5-3.5v-.5A3.5 3.5 0 0 0 11.5 0h-4v8z"/>
            <path fill="#1abcfe" d="M15 8h1.5A3.5 3.5 0 0 0 20 4.5v-.5A3.5 3.5 0 0 0 16.5 0H15v8z"/>
            <path fill="#0acf83" d="M20 12v-.5a3.5 3.5 0 0 0-3.5-3.5h-1.5v7h1.5a3.5 3.5 0 0 0 3.5-3.5v-.5z"/>
            </SafeClient>
        </svg>
    )
}

function WebpackIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <SafeClient>
            <path fill="#8dd6f9" d="M21.5 18.5l-9-5.25v10.5l9-5.25zM2.5 5.5l9 5.25L20.5 5.5l-9-5.25-9 5.25z"/>
            <path fill="#1c78c0" d="M2.5 5.5v13l9 5.25v-10.5L2.5 5.5z"/>
            <path fill="#8dd6f9" d="M11.5 13.25L2.5 8v8l9 5.25v-10.5z" opacity=".2"/>
            <path fill="#1c78c0" d="M12.5 10.75l9-5.25L12.5 0l-9 5.25 9 5.5z" opacity=".2"/>
            <path fill="#fff" d="M21.5 18.5L12.5 23.75v-10.5L2.5 8v-2.5l9-5.25 9 5.25V8l-9 5.25v2.5l9-5.25V18.5z" opacity=".2"/>
            </SafeClient>
        </svg>
    )
}
