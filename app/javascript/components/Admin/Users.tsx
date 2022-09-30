import { useUsersQuery } from "../../graphql/generated";
// import { TaskStateLabel } from "./Enum";

const Users = () => {
  const { data: { users = [] } = {} } = useUsersQuery();

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}-{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
