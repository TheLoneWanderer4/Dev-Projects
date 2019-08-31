
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;


// Define a test suite, with the classes that contain the tests you wish to run
@RunWith(Suite.class)
@Suite.SuiteClasses({
        Drill00TestClass.class
            })
// The main class to be executed; this is the entry point for your tests
public class RunTests {
    public static void main(String[] args) {
        JUnitCore runner = new JUnitCore();
        // Attach a listener for JSON output
        // Run the test suite defined within this class
        Result r = runner.run(RunTests.class);
    }
}
