import { useState } from "react";
import {
  User,
  Palette,
  Laptop,
  Trophy,
  Heart,
  Target,
  BookOpen,
  Sun,
  Star,
  X,
} from "lucide-react";
import portfolioData from "./data/portfolio.json";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Portfolio />
    </div>
  );
}

function Portfolio() {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = [
    { id: "profile", name: "Profile", icon: User },
    { id: "arts", name: "Arts", icon: Palette },
    { id: "coding", name: "Coding", icon: Laptop },
    { id: "awards", name: "Awards", icon: Trophy },
    { id: "volunteering", name: "Volunteering", icon: Heart },
    { id: "activities", name: "Activities", icon: Target },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                JC
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {portfolioData.profile.name}
                </h1>
                <p className="text-sm text-gray-600">
                  {portfolioData.profile.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation */}
          <nav className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeSection === "profile" && <ProfileSection />}
              {activeSection === "arts" && <ArtsSection />}
              {activeSection === "coding" && <CodingSection />}
              {activeSection === "awards" && <AwardsSection />}
              {activeSection === "volunteering" && <VolunteeringSection />}
              {activeSection === "activities" && <ActivitiesSection />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  const { profile } = portfolioData;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div
          className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold overflow-hidden"
          style={{
            background: `url(${profile.portrait})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {profile.name}
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Class of 2025 | {profile.title}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            About Me
          </h3>
          <p className="text-gray-700 leading-relaxed">{profile.description}</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Interests
          </h3>
          <div className="space-y-2">
            {profile.interests.map((interest, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    index === 0
                      ? "bg-purple-500"
                      : index === 1
                      ? "bg-blue-500"
                      : index === 2
                      ? "bg-green-500"
                      : "bg-pink-500"
                  }`}
                ></span>
                <span className="text-gray-700">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Congressional App Challenge Video */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Trophy className="w-5 h-5 mr-2" />
          Congressional App Challenge Participant
        </h3>
        <p className="text-gray-700 mb-4">
          Watch my presentation for the Congressional App Challenge, where I
          build a Board Game Meetup App that connects local gaming communities.
        </p>
        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
          <iframe
            src="https://player.mediadelivery.net/embed/519180/0f756c82-81b3-4f89-bc60-667f56621298"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function ArtsSection() {
  const { artworks } = portfolioData;
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Art Gallery</h2>
        <p className="text-gray-600">
          Exploring creativity through various mediums and styles
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            onClick={() => setSelectedArtwork(artwork)}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
          >
            <div className="aspect-square bg-gray-100">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-1">{artwork.title}</h3>
              <p className="text-sm text-purple-600 mb-2">
                {artwork.medium} • {artwork.year}
              </p>
              <p className="text-gray-600 text-sm">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex-1 flex items-center justify-center mb-4">
              <img
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedArtwork.title}
              </h3>
              <p className="text-purple-600 font-medium mb-3">
                {selectedArtwork.medium} • {selectedArtwork.year}
              </p>
              <p className="text-gray-700">{selectedArtwork.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CodingSection() {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Coding Projects
        </h2>
        <p className="text-gray-600">
          Building solutions that bring communities together
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <Star className="w-5 h-5 mr-2" />
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden border border-purple-100"
            >
              {project.thumbnail && (
                <div className="w-full h-48 bg-gray-100">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Projects */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800">All Projects</h3>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                {project.thumbnail && (
                  <div className="sm:w-48 h-32 sm:h-auto bg-gray-100 flex-shrink-0">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-800">
                      {project.title}
                    </h4>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700 text-sm font-medium"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AwardsSection() {
  const { awards } = portfolioData;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Awards & Recognition
        </h2>
        <p className="text-gray-600">
          Celebrating achievements in academics, arts, and technology
        </p>
      </div>

      <div className="space-y-6">
        {awards.map((award) => (
          <div
            key={award.id}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {award.title}
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  {award.organization} • {award.date}
                </p>
                <p className="text-gray-700">{award.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VolunteeringSection() {
  const { activities } = portfolioData;
  const volunteeringActivities = activities.filter(
    (activity) => activity.type === "volunteering"
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Volunteering</h2>
        <p className="text-gray-600">
          Making a positive impact in my community
        </p>
      </div>

      <div className="space-y-6">
        {volunteeringActivities.map((activity) => (
          <div
            key={activity.id}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xl">
                <Heart className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {activity.title}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {activity.organization} • {activity.duration}
                </p>
                <p className="text-gray-700 mb-3">{activity.description}</p>
                {activity.impact && (
                  <div className="bg-white/50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-green-700">
                        Impact:
                      </span>{" "}
                      {activity.impact}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivitiesSection() {
  const { activities } = portfolioData;
  const summerActivities = activities.filter(
    (activity) => activity.type === "summer"
  );
  const clubActivities = activities.filter(
    (activity) => activity.type === "club"
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Activities</h2>
        <p className="text-gray-600">
          Summer experiences and extracurricular involvement
        </p>
      </div>

      {/* Summer Activities */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <Sun className="w-5 h-5 mr-2" />
          Summer Experiences
        </h3>
        <div className="space-y-4">
          {summerActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                {activity.title}
              </h4>
              <p className="text-pink-600 font-medium mb-2">
                {activity.organization} • {activity.duration}
              </p>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Club Activities */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Club Involvement
        </h3>
        <div className="space-y-4">
          {clubActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                {activity.title}
              </h4>
              <p className="text-purple-600 font-medium mb-2">
                {activity.organization} • {activity.duration}
              </p>
              <p className="text-gray-700 mb-3">{activity.description}</p>
              {activity.impact && (
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-purple-700">Impact:</span>{" "}
                    {activity.impact}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
