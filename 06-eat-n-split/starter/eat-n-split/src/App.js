const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList friend={initialFriends} />
          <FormAddFriend friend={initialFriends} />
          <Button>Add Friend</Button>
        </div>
        <div className="main">
          <FromSplitBill />
        </div>
      </div>
    </>
  );
}

function FriendsList({ friend }) {
  return (
    <ul>
      {friend.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  const { name, image, balance } = friend;
  return (
    <li>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        {balance < 0 && (
          <p className="red">
            You own {name} {balance} €
          </p>
        )}
        {balance > 0 && (
          <p className="green">
            {name} owns you {balance} €
          </p>
        )}
        {balance === 0 && <p>You are even with {name}</p>}
      </div>
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">👫 Friend name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="image">🏞️ image URL</label>
      <input type="text" id="name" name="name" />

      <Button>Add</Button>
    </form>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FromSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label htmlFor="bill">💰 Bill</label>
      <input type="text" id="bill" name="bill" />

      <label htmlFor="expense">🤷 Your expense</label>
      <input type="text" id="expense" name="expense" />

      <label htmlFor="friends">👫 X's expense</label>
      <input type="text" id="friends" name="friends" disable />

      <label htmlFor="Who paid">👉 Who is paying the bill?</label>
      <select name="Who paid" id="Who paid">
        <option value="you">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
