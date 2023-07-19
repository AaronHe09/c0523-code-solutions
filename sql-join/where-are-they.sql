SELECT  "line1",
        "district",
        "cities"."name" as "city"
  FROM "addresses"
  JOIN "cities" USING ("cityId");
