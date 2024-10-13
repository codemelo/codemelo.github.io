'use client';

import { useState } from 'react'
import { Github, Mail, Linkedin, X } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  link: string;
  details: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Crypto Copy-Trade Bot",
    description: "This bot automates cryptocurrency copy trading by integrating with Telegram channels, parsing trade signals, and executing trades on Bybit.",
    link: "https://github.com/codemelo/kimbot",
    details: "This bot automates trading based on Telegram signals. It monitors specific channels, uses a local AI model to extract trade details, and executes trades via the Bybit API. Trade information is stored in an SQLite database for analysis and tracking.",
    technologies: ["Python", "Ollama", "Telethon", "pybit", "SQLite"]
  },
  {
    title: "Web Scraper",
    description: "A web scraping script built with Python and BeautifulSoup to extract data from various websites.",
    link: "https://github.com/yourusername/web-scraper",
    details: "This web scraper is designed to efficiently extract data from multiple websites. It uses BeautifulSoup for parsing HTML and requests for handling HTTP requests. The script is configurable to adapt to different website structures and can handle pagination and error scenarios gracefully. It's particularly useful for gathering large datasets for analysis or monitoring.",
    technologies: ["Python", "BeautifulSoup", "requests", "pandas", "concurrent.futures"]
  },
  {
    title: "Machine Learning Model",
    description: "A machine learning model implemented in Python using scikit-learn for predicting stock prices.",
    link: "https://github.com/yourusername/ml-stock-predictor",
    details: "This project implements a machine learning model to predict stock prices based on historical data and various market indicators. It uses scikit-learn for model training and evaluation, with features including data preprocessing, feature engineering, and model selection. The project also includes visualization of predictions and model performance metrics.",
    technologies: ["Python", "scikit-learn", "pandas", "numpy", "matplotlib"]
  },
  {
    title: "Task Automation Script",
    description: "A Python script that automates repetitive tasks using the os and shutil modules.",
    link: "https://github.com/yourusername/task-automator",
    details: "This automation script streamlines repetitive tasks such as file organization, batch renaming, and data backups. It leverages Python's os and shutil modules for file system operations, and includes a simple CLI for user interaction. The script is easily extendable and can be scheduled to run periodically using cron jobs or Windows Task Scheduler.",
    technologies: ["Python", "os module", "shutil module", "argparse", "logging"]
  }
]

export default function PersonalWebsite() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-yellow-400">Carmelo Giuliano</h1>
        <p className="mt-2 text-xl">Python Developer</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">About Me</h2>
          <p className="max-w-2xl">
            I'm a python developer from Sydney, Australia. My main areas of interest are Decentralised Finance, Automation Scripting, and AI. 
            I enjoy exploring creative ways to automate tasks with speed and efficiency.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProject(project)}
                className="p-6 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Contact Me</h2>
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 text-black rounded"
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-yellow-400 text-black py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Carmelo Giuliano. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-gray-800">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-black border-2 border-yellow-400 p-6 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-yellow-400">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-yellow-400 hover:text-yellow-500">
                <X size={24} />
              </button>
            </div>
            <p className="mb-4">{selectedProject.details}</p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">Technologies Used:</h4>
              <ul className="list-disc list-inside">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <a 
              href={selectedProject.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  )
}