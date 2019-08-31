
public class Drill00 {
    // While nothing needs to be done in this file,
    // it still might be a good idea to look over some of
    // the syntax to familiarize yourself further with Java 
    // syntax. 

    // Return the given value incremented by one.
    // Note that there are no new lines with this function
    static int addOne(int val) { return val + 1; }

    // Return the maximum number between a and b.
    // In this function, an if statement is used. The condition provided MUST 
    // be in parentheses
    static int max(int a, int b) {
        if (a > b) {
        	return a;
        } else {
        	return b;
        }
        
    }

    // Return the sum of a and b.
    static int sum2(int a, int b) {
        return a + b;
    }

    // Return true if the input value is between 10 and 20, inclusive.
    // Here, a boolean is being returned. In python, this would have used the 'and'
    // keyword, but in Java, the same behavior can be performed by using '&&'.
    // The same can be done for the 'or' keyword, by using '||'
    static boolean range1(int a) {
        return (10 <= a && a <= 20);
    }

    // Return the absolute difference between two inputs.
    static int absDiff(int a, int b) {
        int diff = a - b;
        if (diff >= 0) {
            return diff;
        } else {
            return -diff;
        }
    }

}
