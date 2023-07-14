SELECT "amount",
       "lastName",
       "firstName"
  FROM "payments"
  JOIN "customers" USING ("customerId")
  ORDER BY amount DESC
  LIMIT 10q
