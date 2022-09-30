import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601Date: any;
  ISO8601DateTime: any;
};

/** Autogenerated input type of CreateTask */
export type CreateTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  params: TaskAttributes;
};

/** Autogenerated return type of CreateTask */
export type CreateTaskPayload = {
  __typename?: "CreateTaskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  task: Task;
};

/** Autogenerated input type of DeleteTask */
export type DeleteTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
};

/** Autogenerated return type of DeleteTask */
export type DeleteTaskPayload = {
  __typename?: "DeleteTaskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTask?: Maybe<CreateTaskPayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  signUp?: Maybe<SignUpPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

export type Query = {
  __typename?: "Query";
  task: Task;
  taskSearchTitle: Task;
  tasks: Array<Task>;
  users: Array<User>;
};

export type QueryTaskArgs = {
  id: Scalars["ID"];
};

export type QueryTaskSearchTitleArgs = {
  title: Scalars["String"];
};

/** Autogenerated input type of SignUp */
export type SignUpInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  params: UserAttributes;
};

/** Autogenerated return type of SignUp */
export type SignUpPayload = {
  __typename?: "SignUpPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  user: User;
};

export type Task = {
  __typename?: "Task";
  body?: Maybe<Scalars["String"]>;
  createdAt: Scalars["ISO8601DateTime"];
  id: Scalars["ID"];
  limitOn?: Maybe<Scalars["ISO8601Date"]>;
  state: TaskStateEnum;
  title: Scalars["String"];
  updatedAt: Scalars["ISO8601DateTime"];
  userId: Scalars["Int"];
};

export type TaskAttributes = {
  body?: InputMaybe<Scalars["String"]>;
  limitOn?: InputMaybe<Scalars["String"]>;
  state: TaskStateEnum;
  title: Scalars["String"];
};

export enum TaskStateEnum {
  Finished = "finished",
  Started = "started",
  Unstarted = "unstarted",
}

/** Autogenerated input type of UpdateTask */
export type UpdateTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  params: TaskAttributes;
};

/** Autogenerated return type of UpdateTask */
export type UpdateTaskPayload = {
  __typename?: "UpdateTaskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  task: Task;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["ISO8601DateTime"];
  cryptedPassword?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  salt?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["ISO8601DateTime"];
};

export type UserAttributes = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordConfirmation?: InputMaybe<Scalars["String"]>;
};

export type CreateTaskMutationVariables = Exact<{
  params: TaskAttributes;
}>;

export type CreateTaskMutation = {
  __typename?: "Mutation";
  createTask?: {
    __typename?: "CreateTaskPayload";
    task: {
      __typename?: "Task";
      id: string;
      title: string;
      body?: string | null;
    };
  } | null;
};

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteTaskMutation = {
  __typename?: "Mutation";
  deleteTask?: { __typename?: "DeleteTaskPayload"; id: string } | null;
};

export type SignUpMutationVariables = Exact<{
  params: UserAttributes;
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  signUp?: {
    __typename?: "SignUpPayload";
    user: { __typename?: "User"; id: string; name: string; email: string };
  } | null;
};

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars["ID"];
  params: TaskAttributes;
}>;

export type UpdateTaskMutation = {
  __typename?: "Mutation";
  updateTask?: {
    __typename?: "UpdateTaskPayload";
    task: {
      __typename?: "Task";
      id: string;
      title: string;
      body?: string | null;
      state: TaskStateEnum;
      limitOn?: any | null;
    };
  } | null;
};

export type TaskQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type TaskQuery = {
  __typename?: "Query";
  task: {
    __typename?: "Task";
    id: string;
    title: string;
    body?: string | null;
    state: TaskStateEnum;
    limitOn?: any | null;
  };
};

export type TasksQueryVariables = Exact<{ [key: string]: never }>;

export type TasksQuery = {
  __typename?: "Query";
  tasks: Array<{
    __typename?: "Task";
    id: string;
    title: string;
    body?: string | null;
    state: TaskStateEnum;
    limitOn?: any | null;
  }>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "User";
    id: string;
    name: string;
    email: string;
  }>;
};

export const CreateTaskDocument = gql`
  mutation createTask($params: TaskAttributes!) {
    createTask(input: { params: $params }) {
      task {
        id
        title
        body
      }
    }
  }
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    options
  );
}
export type CreateTaskMutationHookResult = ReturnType<
  typeof useCreateTaskMutation
>;
export type CreateTaskMutationResult =
  Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export const DeleteTaskDocument = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(input: { id: $id }) {
      id
    }
  }
`;
export type DeleteTaskMutationFn = Apollo.MutationFunction<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTaskMutation,
    DeleteTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(
    DeleteTaskDocument,
    options
  );
}
export type DeleteTaskMutationHookResult = ReturnType<
  typeof useDeleteTaskMutation
>;
export type DeleteTaskMutationResult =
  Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
>;
export const SignUpDocument = gql`
  mutation signUp($params: UserAttributes!) {
    signUp(input: { params: $params }) {
      user {
        id
        name
        email
      }
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation updateTask($id: ID!, $params: TaskAttributes!) {
    updateTask(input: { id: $id, params: $params }) {
      task {
        id
        title
        body
        state
        limitOn
      }
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      params: // value for 'params'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options
  );
}
export type UpdateTaskMutationHookResult = ReturnType<
  typeof useUpdateTaskMutation
>;
export type UpdateTaskMutationResult =
  Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const TaskDocument = gql`
  query task($id: ID!) {
    task(id: $id) {
      id
      title
      body
      state
      limitOn
    }
  }
`;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskQuery(
  baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
}
export function useTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(
    TaskDocument,
    options
  );
}
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;
export const TasksDocument = gql`
  query tasks {
    tasks {
      id
      title
      body
      state
      limitOn
    }
  }
`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(
  baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TasksQuery, TasksQueryVariables>(
    TasksDocument,
    options
  );
}
export function useTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(
    TasksDocument,
    options
  );
}
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<
  TasksQuery,
  TasksQueryVariables
>;
export const UsersDocument = gql`
  query users {
    users {
      id
      name
      email
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
