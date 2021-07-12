import Button from "./component/Button";

function App() {
  return (
    <div className="App">
      <main id="container">
        <div id="col1"></div>
        <div id="col2">
          <h2>Buttons</h2>
          <div className="btn-group-container">
            <div className="btn-group">
              <h5>&lt;Button /&gt;</h5>
              <Button name="Default" />
            </div>
            <div className="btn-group">
              <h5>&:hover, &:focus</h5>
              <Button focusNeutral name="Default" />
            </div>
          </div>
          <div className="btn-group-container">
            <div className="btn-group">
              <h5>&lt;Button variant="outline" /&gt;</h5>
              <Button variant="outline" />
            </div>
            <div className="btn-group">
              <h5>&:hover, &:focus</h5>
              <Button focusOutline variant="outline" />
            </div>
          </div>
          <div className="btn-group-container">
            <div className="btn-group">
              <h5>&lt;Button variant="text" /&gt;</h5>
              <Button textColor="blue" variant="text" />
            </div>
            <div className="btn-group">
              <h5>&:hover, &:focus</h5>
              <Button textColor="blue" focusText variant="text" />
            </div>
          </div>
          <div className="btn-group-container">
            <div className="btn-group">
              <h5>&lt;Button disableShadow /&gt;</h5>
              <Button color="primary" disableShadow />
            </div>
          </div>
          <div className="btn-group-container">
            <div className="btn-group">
              <h5>&lt;Button disabled /&gt;</h5>
              <Button name="Disabled" disabled>
                Disabled
              </Button>
            </div>
            <div className="btn-group">
              <h5>&lt;Button variant="text" disabled /&gt;</h5>
              <Button variant="text" name="Disabled" disabled>
                Disabled
              </Button>
            </div>
          </div>
          <div className="btn-group-container">
            <div className="btn-group btn-group-long">
              <h5>&lt;Button startIcon="local_grocery_store" /&gt;</h5>
              <Button color="primary" startIcon="local_grocery_store" />
            </div>
            <div className="btn-group">
              <h5>&lt;Button endIcon="local_grocery_store" /&gt;</h5>
              <Button color="primary" endIcon="local_grocery_store" />
            </div>
          </div>
          <div className="btn-group-container">
            <div className="btn-group">
              <h5>&lt;Button size="sm" /&gt;</h5>
              <Button color="primary" size="sm" />
            </div>
            <div className="btn-group">
              <h5>&lt;Button size="md" /&gt;</h5>
              <Button color="primary" size="md" />
            </div>
            <div className="btn-group">
              <h5>&lt;Button size="lg" /&gt;</h5>
              <Button color="primary" size="lg" />
            </div>
          </div>
          <div className="btn-group-container">
            <div className="btn-group">
              <h5>&lt;Button color="default" /&gt;</h5>
              <Button color="default" />
            </div>
            <div className="btn-group">
              <h5>&lt;Button color="primary" /&gt;</h5>
              <Button name="Primary" color="primary" />
            </div>
            <div className="btn-group">
              <h5>&lt;Button color="secondary" /&gt;</h5>
              <Button name="Secondary" color="secondary" />
            </div>
            <div className="btn-group">
              <h5>&lt;Button color="danger" /&gt;</h5>
              <Button name="Danger" color="danger" />
            </div>
          </div>
          <div className="btn-group-container">
            <div className="btn-group">
              <h5>&:hover, &:focus</h5>
              <Button size="md" focusNeutral />
            </div>
            <div className="btn-group">
              <h5>&:hover, &:focus</h5>
              <Button name="Primary" focusPrimary />
            </div>
            <div className="btn-group">
              <h5>&:hover, &:focus</h5>
              <Button name="Secondary" focusSecondary />
            </div>
            <div className="btn-group">
              <h5>&:hover, &:focus</h5>
              <Button name="Danger" focusDanger />
            </div>
          </div>
          <footer>
            <h4>
              Created by{" "}
              <a href="https://devchallenges.io/portfolio/trottdeaje">
                trottdeaje
              </a>{" "}
              - devChallenges.io
            </h4>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
