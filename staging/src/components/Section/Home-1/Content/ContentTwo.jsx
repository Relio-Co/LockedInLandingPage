const ContentSectionTwo = () => {
  return (
    <div className="section zubuz-section-padding5 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="zubuz-thumb thumb-pl">
              <img src="/images/v1/mocup2.png" alt="" />
              <div className="zubuz-thumb-card2">
                <img src="/images/v1/card2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="zubuz-default-content">
              <h2>Accountability & Insights</h2>
              <p>
                Stay motivated with friends, join groups, and participate in challenges to keep each other accountable. Receive insights and recommendations to improve your habits and achieve your goals.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-icon">
                    <img src="/images/v1/icon1.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data">
                    <span>Accountability</span>
                    <p>
                      Stay motivated with friends, join groups, and participate in challenges to keep each other accountable.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-icon">
                    <img src="/images/v1/icon2.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data">
                    <span>Insights</span>
                    <p>
                      Receive insights and recommendations to improve your habits and achieve your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
