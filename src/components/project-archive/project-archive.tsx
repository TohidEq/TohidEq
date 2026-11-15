"use client";

import { useState } from "react";

import { projectGroups } from "./projects";

import "./project-archive.css";

import type { Project } from "./projects";

export default function ProjectArchive() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="project-archive font-machine">

      {/* Project Preview */}

      <header className="project-archive__preview">

        <div className="project-archive__preview-main">

          <div className="project-archive__eyebrow">
            <span>PROJECT ARCHIVE</span>
            <span>SELECTED / ALL WORKS</span>
          </div>

          <div className="project-archive__details">

            <h1 className="project-archive__title">
              {activeProject?.name ?
                              <a
                                href={activeProject?.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {activeProject?.name}
                              </a>

                : "[ none ]"}
            </h1>

            <p className="project-archive__description">
              {activeProject?.description ?? "Select a project to inspect its details."}
            </p>

          </div>

        </div>

        <div className="project-archive__preview-meta">

          <div className="project-archive__technologies">
            {activeProject?.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="project-archive__links">

            {activeProject ? (
              <>
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>

                {activeProject.demo && (
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LIVE DEMO ↗
                  </a>
                )}
              </>
            ) : (
              <span>[ links ]</span>
            )}

          </div>

        </div>

      </header>


      {/* Project Groups */}

      <main className="project-archive__index">

        {projectGroups.map((group) => (

          <section
            className="project-archive__group"
            key={group.id}
          >

            <header className="project-archive__group-header">

              <span className="project-archive__group-number">
                {group.number}
              </span>

              <h2>
                {group.title}
              </h2>

            </header>

            <ul className="project-archive__list">

              {group.projects.map((project) => {

                const isActive = activeProject?.id === project.id;

                return (
                  <li key={project.id}>

                    <button
                      type="button"
                      className={`project-archive__item ${
                        isActive ? "is-active" : ""
                      }`}
                      onClick={() => {
                        setActiveProject(
                          isActive ? null : project
                        );
                      }}
                      aria-pressed={isActive}
                    >

                      <span className="project-archive__item-indicator">
                        {isActive ? "●" : "○"}
                      </span>

                      <span className="project-archive__item-name">
                        {project.name}
                      </span>

                    </button>

                  </li>
                );
              })}

            </ul>

          </section>

        ))}

      </main>


      {/* Contact */}

      <footer className="project-archive__footer">

        <div className="project-archive__footer-label">
          CONTACT / ELSEWHERE
        </div>

        <div className="project-archive__footer-links">

          <a
            href="https://github.com/TohidEq"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <span className="project-archive__footer-separator">
            /
          </span>

          <span>
            AVAILABLE FOR OPPORTUNITIES
          </span>

        </div>

        <span className="project-archive__copyright">
          © {new Date().getFullYear()} — TOHIDEQ
        </span>

      </footer>

    </section>
  );
}
