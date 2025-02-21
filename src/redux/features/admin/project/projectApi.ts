/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TProject } from "@/types/project.type";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (projectData: TProject) => ({
        url: "/projects",
        method: "POST",
        body: projectData,
      }),
    }),

    getAllProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response.data,
        };
      },
    }),

    getProjectById: builder.query({
      query: (id: string) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
    }),

    deleteProject: builder.mutation({
      query: (id: string) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
    }),

    updateProject: builder.mutation<
      TProject,
      { id: string; updatedProject: Partial<TProject> }
    >({
      query: ({ id, updatedProject }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body: updatedProject,
      }),
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useGetProjectByIdQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation
} = projectApi;
