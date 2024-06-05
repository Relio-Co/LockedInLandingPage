const ContentSectionOne = () => {
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-thumb thumb-pr">
              <img src="/images/v1/mocup01.png" alt="App Mockup" />
              <div className="zubuz-thumb-card">
                <img src="/images/v1/card1.png" alt="App Features" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="zubuz-default-content">
              <h2>Why people all over rely on LockedIn</h2>
              <div className="zubuz-extara-mt">
                <p>
                  <span className="font-semibold">Habit Tracking:</span> Input daily activities, categorize habits, and view reports and summaries of your progress.
                </p>
                <p>
                  <span className="font-semibold">Goal Setting:</span> Set achievable goals, plan your habit-building journey, and track your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
