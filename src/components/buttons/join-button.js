export function JoinButtonSmall() {
  return (
    <>
      <a
        className="join-button-small"
        href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!"
      >
        Join us at our next meeting
      </a>
    </>
  );
}

export function JoinButtonBig() {
  return (
    <>
      <a
        className="join-button-big"
        href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!"
      >
        Join us at our next meeting
      </a>
    </>
  );
}

export function QueryButton() {
  return (
    <>
      <a
        variant="contained"
        className="query-button"
        href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20know%20more%20about%20PTM%20meetings!"
      >
        Drop us an email
      </a>
    </>
  );
}

export function SkipToContent() {
  return (
    <>
      <div className="skip-to-content">
        Skip to <a href="#body">content</a> or <a href="#footer">footer</a>
      </div>
    </>
  );
}
