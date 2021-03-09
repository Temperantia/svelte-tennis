<script lang="ts">
  import tennis from './store/tennis';
  import { Container, Row, Col, Button, Card } from 'sveltestrap';
</script>

<Container>
  <Row>
    {#each $tennis.players as player, index}
      <Col>
        <Card>
          <Card Header><h1>{player.name}</h1></Card>
          <Card Body>{player.score.message}</Card>
          <Card Footer>
            {#if !$tennis.winner}<Button
                on:click={(_) => tennis.scorePoint(index + 1)}>Score</Button
              >{/if}</Card
          >
        </Card>
      </Col>
    {/each}
  </Row>
  {#if $tennis.winner}
    <Row>
      <Col class="d-flex flex-column align-items-center">
        <h2>{$tennis.winner.name} Won</h2>
        <Button on:click={(_) => tennis.reset()}>Restart</Button>
      </Col>
    </Row>{/if}
</Container>

<style>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
</style>
