# Git Workflow Mastery

A practical DevOps learning project demonstrating essential Git and GitHub workflows through hands-on development, branching, collaboration, merge conflict resolution, and repository management.

**Repository:** https://github.com/ifobook/git-workflow-mastery

## 1. Project Overview

This repository contains a simple interactive web application built with HTML, CSS, and JavaScript.

The primary objective is to demonstrate how Git and GitHub are used to manage changes, maintain version history, collaborate through Pull Requests, and organize software development workflows.

## 2. Project Objectives

- Initialize and configure a Git repository.
- Track changes through staging and atomic commits.
- Develop functionality using feature branches.
- Push local branches to GitHub.
- Create, review, and merge Pull Requests.
- Identify and manually resolve merge conflicts.
- Configure `.gitignore` to exclude unnecessary files.
- Track development tasks using GitHub Issues.
- Understand Git tags and GitHub Releases.
- Explore branch protection and repository governance.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Git | Version control and change tracking |
| GitHub | Remote repository and collaboration |
| HTML5 | Application structure |
| CSS3 | Styling, responsiveness, and animations |
| JavaScript | Application interactivity |
| VS Code | Source code editing |
| macOS Terminal | Git command-line operations |

## 4. Project Structure

```text
git-workflow-mastery/
├── css/
│   └── style.css
├── docs/
│   ├── merge-conflict-resolution.md
│   └── team-guidelines.md
├── js/
│   └── app.js
├── screenshots/
│   ├── commit-history.png
│   ├── merge-conflict-before.png
│   ├── merge-conflict-resolved.png
│   ├── pull-request-merged.png
│   └── pull-request-open.png
├── .gitignore
├── index.html
└── README.md
```

## 5. Repository Initialization

The project began with the creation of a local Git repository.

```bash
mkdir git-workflow-mastery
cd git-workflow-mastery
git init
```

Git was configured to use `main` as the default branch.

```bash
git config --global init.defaultBranch main
```

The local repository was connected to GitHub using SSH.

```bash
git remote add origin git@github.com:ifobook/git-workflow-mastery.git
git push -u origin main
```

## 6. Staging and Atomic Commits

Git uses a staging area to prepare changes before committing them to the repository history.

The basic workflow is:

```bash
git status
git add <file>
git commit -m "descriptive commit message"
```

Atomic commits represent individual, meaningful changes rather than combining unrelated modifications.

Examples from this project include:

- `b450e95` — Initialize project documentation and `.gitignore`.
- `287fa44` — Add initial HTML, CSS, and JavaScript.
- `423f50c` — Create structured homepage layout.
- `b3667f8` — Add responsive homepage styling and animations.
- `810c676` — Add interactive homepage welcome button.

This approach makes the repository history easier to understand, review, and troubleshoot.

## 7. Branching Strategy

The project follows a feature-branch workflow.

The `main` branch represents the stable version of the project.

New features, experiments, and documentation updates are developed in separate branches before being integrated through Pull Requests.

Example:

```bash
git switch main
git switch -c feature/improve-homepage
```

After development:

```bash
git add index.html
git commit -m "feat: create structured homepage layout"
git push -u origin feature/improve-homepage
```

Branches used in this project include:

| Branch | Purpose |
|---|---|
| `main` | Stable project history |
| `feature/improve-homepage` | Homepage improvements |
| `experiment/merge-conflict` | Merge conflict demonstration |
| `experiment/conflict-version-a` | Two-reviewer policy |
| `experiment/conflict-version-b` | One-reviewer policy |
| `docs/issue-3-readme` | README improvements linked to Issue #3 |

## 8. Pull Request Workflow

Pull Requests allow proposed changes to be reviewed before they are integrated into the main branch.

The workflow demonstrated in this project is:

1. Create a development branch.
2. Make focused changes and commit them.
3. Push the branch to GitHub.
4. Open a Pull Request targeting `main`.
5. Review the proposed changes.
6. Merge the Pull Request.
7. Synchronize the local `main` branch.

### Completed Pull Requests

**Pull Request #1 — Homepage Improvements**

[View Pull Request #1](https://github.com/ifobook/git-workflow-mastery/pull/1)

Implemented a structured homepage, responsive styling, animations, and JavaScript interactivity.

Merge commit: `a5ce856`

**Pull Request #2 — Merge Conflict Resolution**

[View Pull Request #2](https://github.com/ifobook/git-workflow-mastery/pull/2)

Integrated the merge conflict demonstration, development guidelines, documentation, and screenshots.

Merge commit: `e22880e`

## 9. Merge Conflict Demonstration

A merge conflict was intentionally created to understand how Git handles competing changes.

The original policy stated:

> Every Pull Request should be reviewed before merging.

Two branches independently modified the same line.

**Branch A:**

> Every Pull Request must be approved by at least two reviewers before merging.

**Branch B:**

> Every Pull Request must be approved by at least one reviewer before merging.

After merging Branch A, merging Branch B produced a conflict.

Git inserted conflict markers showing the competing changes.

The conflict was manually resolved by retaining the two-reviewer policy.

The resolved file was staged and committed.

```bash
git add docs/team-guidelines.md
git commit -m "merge: resolve conflicting pull request review policies"
```

Conflict resolution merge commit: `4c0e705`

For a complete explanation, see [Merge Conflict Resolution Documentation](docs/merge-conflict-resolution.md).

## 10. `.gitignore` and Repository Hygiene

The `.gitignore` file prevents unnecessary or sensitive files from being included in Git commits.

The project ignores:

- Environment variable files such as `.env`.
- Dependency directories such as `node_modules/`.
- Generated build directories such as `dist/` and `build/`.
- Log files.
- macOS `.DS_Store` files.
- Editor-specific directories.

Ignored files were verified using:

```bash
git check-ignore -v .env node_modules/example.js dist/index.html debug.log .DS_Store
```

Tracked paths were checked using:

```bash
git ls-files .env node_modules dist .DS_Store
```

The verification confirmed that the tested paths were excluded from tracking.

## 11. GitHub Issues

GitHub Issues provide a structured way to track development tasks, improvements, and bugs.

[Issue #3 — Improve Project README](https://github.com/ifobook/git-workflow-mastery/issues/3) tracks the documentation improvements in this project.

The documentation work is being implemented on the `docs/issue-3-readme` branch.

A Pull Request will be linked to the Issue so that the documentation work can be reviewed and tracked.

## 12. Git Tags and GitHub Releases

Git tags identify important points in repository history, such as software versions.

For example, an annotated release tag can be created using:

```bash
git tag -a v1.0.0 -m "Git Workflow Mastery version 1.0.0"
git push origin v1.0.0
```

GitHub Releases can then be created from the tag to document version changes and provide a reference point for users.

**Status:** Release creation is a remaining project milestone.

## 13. Branch Protection

Branch protection helps safeguard important branches by controlling how changes are merged.

Common settings include:

- Requiring Pull Requests before merging.
- Requiring approvals before merging.
- Preventing force pushes.
- Preventing accidental branch deletion.
- Requiring status checks when appropriate.

**Status:** Branch protection configuration and verification are remaining project milestones.

## 14. Screenshots and Evidence

The repository includes screenshots documenting the Git workflow.

| Evidence | Screenshot |
|---|---|
| Pull Request details | [View](screenshots/pull-request-open.png) |
| Successful PR merge | [View](screenshots/pull-request-merged.png) |
| Git commit and merge history | [View](screenshots/commit-history.png) |
| Merge conflict evidence | [View](screenshots/merge-conflict-before.png) |
| Resolved merge conflict | [View](screenshots/merge-conflict-resolved.png) |

The merge conflict evidence includes Git's reconstructed conflict output where applicable.

## 15. Running the Application

Clone the repository:

```bash
git clone git@github.com:ifobook/git-workflow-mastery.git
cd git-workflow-mastery
```

Open `index.html` in a web browser.

The project uses HTML, CSS, and JavaScript without requiring a build process.

## 16. Key Lessons Learned

This project demonstrates that:

1. Git maintains a traceable history of software changes.
2. Atomic commits improve code review and troubleshooting.
3. Feature branches isolate development from the stable branch.
4. Pull Requests support structured collaboration.
5. Merge conflicts require deliberate decisions when changes overlap.
6. `.gitignore` helps prevent unnecessary files from entering version control.
7. GitHub Issues connect planned tasks to implementation.
8. Tags and Releases provide identifiable software milestones.
9. Branch protection helps enforce repository governance.

## 17. Project Repository

**GitHub:** https://github.com/ifobook/git-workflow-mastery

This project was developed as a practical exercise in Git, GitHub, and foundational DevOps workflows.
This project was developed as a practical exercise in Git, GitHub, and foundational DevOps workflows.
