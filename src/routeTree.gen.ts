/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileImport } from './routes/profile'
import { Route as EditProfileImport } from './routes/edit-profile'
import { Route as CreateProfileImport } from './routes/create-profile'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const EditProfileRoute = EditProfileImport.update({
  id: '/edit-profile',
  path: '/edit-profile',
  getParentRoute: () => rootRoute,
} as any)

const CreateProfileRoute = CreateProfileImport.update({
  id: '/create-profile',
  path: '/create-profile',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/create-profile': {
      id: '/create-profile'
      path: '/create-profile'
      fullPath: '/create-profile'
      preLoaderRoute: typeof CreateProfileImport
      parentRoute: typeof rootRoute
    }
    '/edit-profile': {
      id: '/edit-profile'
      path: '/edit-profile'
      fullPath: '/edit-profile'
      preLoaderRoute: typeof EditProfileImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/create-profile': typeof CreateProfileRoute
  '/edit-profile': typeof EditProfileRoute
  '/profile': typeof ProfileRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/create-profile': typeof CreateProfileRoute
  '/edit-profile': typeof EditProfileRoute
  '/profile': typeof ProfileRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/create-profile': typeof CreateProfileRoute
  '/edit-profile': typeof EditProfileRoute
  '/profile': typeof ProfileRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/create-profile' | '/edit-profile' | '/profile'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/create-profile' | '/edit-profile' | '/profile'
  id: '__root__' | '/' | '/create-profile' | '/edit-profile' | '/profile'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CreateProfileRoute: typeof CreateProfileRoute
  EditProfileRoute: typeof EditProfileRoute
  ProfileRoute: typeof ProfileRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CreateProfileRoute: CreateProfileRoute,
  EditProfileRoute: EditProfileRoute,
  ProfileRoute: ProfileRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/create-profile",
        "/edit-profile",
        "/profile"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/create-profile": {
      "filePath": "create-profile.tsx"
    },
    "/edit-profile": {
      "filePath": "edit-profile.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
