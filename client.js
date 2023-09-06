const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "Node-kafka-demo",
  brokers: ["192.168.1.55:9092"],
});
