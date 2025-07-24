import UserAccount from "../../components/UserAccount";
import { render, screen } from "@testing-library/react";
import { User } from "../../entities";

describe("User Account Test", () => {
  it("should render user name", () => {
    const user: User = {
      id: 1,
      name: "John Doe",
    };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render edit button if user is admin", () => {
    const user: User = {
      id: 1,
      name: "John Doe",
      isAdmin: true,
    };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render login button if user is not admin", () => {
    const user: User = {
      id: 1,
      name: "John Doe",
      isAdmin: false,
    };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
