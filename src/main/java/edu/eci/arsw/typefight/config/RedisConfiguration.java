package edu.eci.arsw.typefight.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

@Configuration
public class RedisConfiguration {

    @Value("${spring.redis.host}")
    private String hostName;
    @Value("${spring.redis.port}")
    private int port;
    @Value("${spring.redis.ssl}")
    private boolean ssl;
    @Value("${spring.redis.password}")
    private String accessKey;

    @Bean
    public JedisConnectionFactory redisConnectionFactory() {
        JedisConnectionFactory factory = new JedisConnectionFactory();
        factory.setHostName(hostName);
        factory.setPort(port);
        factory.setPassword(accessKey);
        factory.setUsePool(true);

        return factory;
    }

    @Bean
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory cf) {
        RedisTemplate<Object, Object> redisTemplate = new RedisTemplate<Object, Object>();
        redisTemplate.setDefaultSerializer(new StringRedisSerializer());
        redisTemplate.setConnectionFactory(cf);

        return redisTemplate;
    }

    @Bean
    public JedisPool getConfig() {
        JedisPoolConfig config =new JedisPoolConfig();
        JedisPool jedisPool = new JedisPool();
        config.setMaxTotal(100);
        config.setMaxIdle(200);
        config.setMinIdle(50);
        config.setMaxWaitMillis(30000);
        config.setTestOnBorrow(true);
        jedisPool = new JedisPool(config, hostName, port,300000,accessKey);
        return jedisPool;
}

 }