import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";
import { User } from "../../entities";

describe("UserList", () => {
  it("should render no users if users is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/No users/i)).toBeInTheDocument();
  });

  it("should render user lists if users is empty", () => {
    const users: User[] = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];

    render(<UserList users={users} />);

    users.forEach(user => {
        const link = screen.getByRole('link', { name: user.name })
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/users/${user.id}`);
    })
  });
});
