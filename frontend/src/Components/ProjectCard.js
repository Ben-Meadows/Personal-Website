import React from 'react';
import Markdown from 'react-markdown';

function ProjectCard({ title, href, description, dates, tags, image, video, links }) {
  return (
    <div className="project-card flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <a href={href || '#'} className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <img
            src={image}
            alt={title}
            width={500}
            height={300}
            className="project-image"
          />
        )}
      </a>

      <div className="project-header px-2">
        <h3 className="project-title">{title}</h3>
        <time className="font-sans text-xs">{dates}</time>
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground">
          {description}
        </Markdown>
      </div>

      <div className="project-content mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="project-techstack">
            {tags.map((tag, index) => (
              <span key={index} className="tech-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className="project-footer px-2 pb-2">
        {links && links.length > 0 && (
          <div className="project-buttons">
            {links.map((link, index) => (
              <a href={link.href} key={index} target="_blank" rel="noreferrer" className="project-button">
                {link.icon} {link.type}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
