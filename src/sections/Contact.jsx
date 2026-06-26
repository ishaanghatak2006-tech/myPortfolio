import Window from '../components/Window';
import { FiGithub, FiSend, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  return (
    <Window title="contact.sh" id="contact">
      <div className="max-w-lg mx-auto">
        <div className="border border-[#1f1f1f] p-5 mb-6">
          <p className="font-mono-display text-[0.65rem] text-[#555555] mb-4">
            $ echo $CONTACT_INFO
          </p>
          <div className="space-y-2 text-[0.8rem]">
            <p className="flex items-center gap-2">
              <span className="font-mono-display text-[#555555] w-20">Email</span>
              <span className="text-[#e8e8e8] font-mono-display">ishaanghatak2006@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-mono-display text-[#555555] w-20">GitHub</span>
              <a
                href="https://github.com/ishaanghatak2006-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8e8e8] font-mono-display hover:text-white transition-colors"
              >
                github.com/ishaanghatak2006-tech
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-mono-display text-[#555555] w-20">LeetCode</span>
              <a
                href="https://leetcode.com/u/krakenwagen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8e8e8] font-mono-display hover:text-white transition-colors"
              >
                leetcode.com/u/krakenwagen
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-mono-display text-[#555555] w-20">LinkedIn</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8e8e8] font-mono-display hover:text-white transition-colors"
              >
                linkedin.com/in/ishaan
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-mono-display text-[#555555] w-20">WhatsApp</span>
              <span className="text-[#e8e8e8] font-mono-display">+91 8758388899</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ishaanghatak2006@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#1f1f1f] text-[0.7rem] font-mono-display text-[#e8e8e8] hover:border-white transition-colors duration-150"
          >
            <FiSend size={14} /> Send Email
          </a>
          <a
            href="https://github.com/ishaanghatak2006-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#1f1f1f] text-[0.7rem] font-mono-display text-[#e8e8e8] hover:border-white transition-colors duration-150"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#1f1f1f] text-[0.7rem] font-mono-display text-[#e8e8e8] hover:border-white transition-colors duration-150"
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </Window>
  );
}