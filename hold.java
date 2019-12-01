import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class PA2Main {
    public static Map<String, Integer> buildData(String fileName) {
        Map<String, Integer> catagories = new HashMap<String, Integer>();
        Map<String, List<String>> locations = new HashMap<String, List<String>>();


        Scanner fileReader = null;

        try {
            fileReader = new Scanner(new File(fileName));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        while (fileReader.hasNext()) {
            String[] line = fileReader.nextLine().split(",");
            String categoryKey = line[2];
            String location = line[3];

            if (!catagories.containsKey(categoryKey)) {
                catagories.put(categoryKey, 0);
            }
            catagories.put(categoryKey, catagories.get(categoryKey) + 1);

            if (!locations.containsKey(categoryKey)) {
                locations.put(categoryKey, new LinkedList<String>());
            }
            locations.get(categoryKey).add(location);

        }

        locations.forEach((key, value) -> System.out.println(key + ":" + value));

        fileReader.close();

        return catagories;
    }

    public static void main(String[] args) {
        Map<String, Integer> data = buildData(args[0]);


    }
}
