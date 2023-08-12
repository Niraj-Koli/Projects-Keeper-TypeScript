import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

// Alternative //

/// <reference path="project.ts" /> //

// namespace App {
//     new ProjectInput();
//     new ProjectList("active");
//     new ProjectList("finished");
// }
