
import static org.junit.Assert.assertEquals;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

// This is an annotation for assigning point values to tests


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class Drill00TestClass {


    @Test
    public void test_addOne_test1() {
        int x = Drill00.addOne(-1);
        System.out.println("addOne(-1), got " + x);
        assertEquals(x, 0);
    }

    @Test
    public void test_max_test1() {
        int x = Drill00.max(Integer.MAX_VALUE, 0);
        System.out.println("max(Integer.MAX_VALUE,0), got " + x);
        assertEquals(x, Integer.MAX_VALUE);
    }

    @Test
    public void test_max_test2() {
        int x = Drill00.max(Integer.MIN_VALUE, -1);
        System.out.println("max(Integer.MIN_VALUE, -1), got " + x);
        assertEquals(x, -1);
    }

    @Test
    public void test_sum2_test1() {
        int x = Drill00.sum2(3, 4);
        System.out.println("sum2(3,4), got " + x);
        assertEquals(x, 7);
    }

    @Test
    public void test_sum2_test2() {
        int x = Drill00.sum2(Integer.MAX_VALUE, Integer.MIN_VALUE);
        System.out.println(
                "sum2(Integer.MAX_VALUE, Integer.MIN_VALUE), got " + x);
        assertEquals(x, -1);
    }

    @Test
    public void test_range1_test1() {
        boolean x = Drill00.range1(20);
        System.out.println("range1(20), got " + x);
        assertEquals(x, true);
    }

    @Test
    public void test_range1_test2() {
        boolean x = Drill00.range1(21);
        System.out.println("range1(21), got " + x);
        assertEquals(x, false);
    }

    @Test
    public void test_range1_test3() {
        boolean x = Drill00.range1(9);
        System.out.println("range1(9), got " + x);
        assertEquals(x, false);
    }

    @Test
    public void test_absDiff_test1() {
        int x = Drill00.absDiff(6, 3);
        System.out.println("absDiff(6,3), got " + x);
        assertEquals(x, 3);
    }

    @Test
    public void test_absDiff_test2() {
        int x = Drill00.absDiff(3, 6);
        System.out.println("absDiff(3,6), got " + x);
        assertEquals(x, 3);
    }

}
