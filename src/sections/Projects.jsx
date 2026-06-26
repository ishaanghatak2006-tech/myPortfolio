import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Window from '../components/Window';
import { projects } from '../constants/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border border-[#1f1f1f] bg-[#0d0d0d] hover:border-[#2e2e2e] transition-colors duration-150 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-mono-display text-white text-[0.8rem] font-medium">{project.name}</h3>
            <p className="text-[0.75rem] text-[#555555] mt-0.5">{project.tagline}</p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[#555555] hover:text-white transition-colors duration-150 shrink-0 ml-2"
            aria-label={`${project.name} GitHub`}
          >
            <FiGithub size={15} />
          </a>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 border border-[#1f1f1f] text-[0.6rem] font-mono-display text-[#555555]"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[0.6rem] font-mono-display text-[#555555]">+{project.techStack.length - 4}</span>
          )}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-[#1f1f1f] pt-3 space-y-2">
              <p className="text-[0.8rem] text-[#e8e8e8] font-sans-body leading-relaxed">{project.description}</p>
              {project.features && (
                <ul className="space-y-1">
                  {project.features.map((f, i) => (
                    <li key={i} className="text-[0.7rem] text-[#555555] font-mono-display">→ {f}</li>
                  ))}
                </ul>
              )}
              {project.architecture && (
                <p className="text-[0.7rem] text-[#555555] font-mono-display leading-relaxed">{project.architecture}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FeaturedProject({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border border-[#1f1f1f] bg-[#0d0d0d] hover:border-[#2e2e2e] transition-colors duration-150 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[0.6rem] font-mono-display text-[#555555] tracking-wider uppercase border border-[#1f1f1f] px-2 py-0.5">
            [FEATURED BUILD]
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[#555555] hover:text-white transition-colors duration-150"
            aria-label={`${project.name} GitHub`}
          >
            <FiGithub size={16} />
          </a>
        </div>
        <h3 className="font-mono-display text-white text-base font-bold">{project.name}</h3>
        <p className="text-[0.8rem] text-[#555555] mt-1">{project.tagline}</p>
        <p className="text-[0.85rem] text-[#e8e8e8] font-sans-body mt-3 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 border border-[#1f1f1f] text-[0.65rem] font-mono-display text-[#555555]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-[#1f1f1f] pt-3 space-y-3">
              <p className="text-[0.75rem] text-[#555555] font-mono-display leading-relaxed">{project.architecture}</p>
              <div className="border border-[#1f1f1f] p-3">
                <p className="font-mono-display text-[0.65rem] text-[#555555] mb-2 tracking-wider">Key Features</p>
                <ul className="space-y-1">
                  {project.features.map((f, i) => (
                    <li key={i} className="text-[0.7rem] text-[#e8e8e8] font-mono-display">→ {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Window title="projects/" id="projects">
      <div className="space-y-6">
        {featured && <FeaturedProject project={featured} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Window>
  );
}