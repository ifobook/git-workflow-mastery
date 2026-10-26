# Git Merge Conflict Resolution

## Overview

This document demonstrates how a Git merge conflict was intentionally created, identified, and manually resolved.

## Objective

Understand how Git handles conflicting changes made to the same lines of a file across separate branches.

## Branches Used

- experiment/merge-conflict
- experiment/conflict-version-a
- experiment/conflict-version-b

## Initial Setup

The baseline file was `docs/team-guidelines.md`.

Original policy:

> Every Pull Request should be reviewed before merging.

Baseline commit: `befe525`

## Creating the Conflict

Two branches were created from the same baseline.

### Branch A

Branch: `experiment/conflict-version-a`

Commit: `082dafb`

Policy: Every Pull Request must be approved by at least two reviewers before merging.

### Branch B

Branch: `experiment/conflict-version-b`

Commit: `053d981`

Policy: Every Pull Request must be approved by at least one reviewer before merging.

## Merging the Branches

Branch A was merged first:

    git switch experiment/merge-conflict
    git merge experiment/conflict-version-a

This resulted in a fast-forward merge.

Branch B was merged next:

    git merge experiment/conflict-version-b

Git detected conflicting changes in `docs/team-guidelines.md`.

## Conflict Markers

Git inserted the following conflict markers:

    <<<<<<< HEAD
    Every Pull Request must be approved by at least two reviewers before merging.
    =======
    Every Pull Request must be approved by at least one reviewer before merging.
    >>>>>>> experiment/conflict-version-b

## Conflict Resolution

The conflict was manually resolved by selecting the two-reviewer policy.

The conflict markers were removed, leaving:

> Every Pull Request must be approved by at least two reviewers before merging.

## Completing the Merge

The resolved file was staged:

    git add docs/team-guidelines.md

The merge was completed:

    git commit -m "merge: resolve conflicting pull request review policies"

Merge commit: `4c0e705`

## Verification

The following commands were used:

    git status
    git log --oneline --graph --decorate --all
    cat docs/team-guidelines.md

The working tree was clean after the merge.

## Lessons Learned

1. Merge conflicts occur when Git cannot automatically reconcile competing changes.
2. Conflict markers identify the current and incoming changes.
3. Developers must manually decide which changes to retain.
4. Git add marks a resolved file as ready for committing.
5. A merge commit records the integration of both branches.

## Evidence

Screenshots documenting the conflict and resolution are stored in the `screenshots/` directory.
